const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

// Umgebungsvariable für JWT-Schlüssel
const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecretKey';

router.post('/register', async (req, res) => {
  try {
    // Hier könnten Sie die Eingabedaten validieren
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { email: user.email, id: user._id } }); // Passwort nicht zurückgeben
  } catch (error) {
    res.status(500).json({ message: 'Error during authentication' });
  }
});

module.exports = router;
