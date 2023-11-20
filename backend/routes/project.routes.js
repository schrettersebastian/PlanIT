const express = require('express');
const router = express.Router();
const Project = require('../models/project.model'); // Stellen Sie sicher, dass der Pfad korrekt ist

// CREATE: Ein neues Projekt erstellen
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ: Ein spezifisches Projekt anhand seiner ID abrufen
router.get('/', async (req, res) => {
    try {
      const projects = await Project.find().populate('tasks');
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// UPDATE: Ein Projekt aktualisieren
router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Ein Projekt löschen
router.delete('/:id', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
