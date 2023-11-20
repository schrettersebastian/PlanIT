const express = require('express');
const router = express.Router();
const Task = require('../models/task.model'); 
const Project = require('../models/project.model'); // Fügen Sie diesen Import hinzu


// CREATE: Eine neue Aufgabe erstellen
router.post('/', async (req, res) => {
    try {
      const newTask = new Task(req.body);
      const savedTask = await newTask.save();
  
      // Aktualisieren Sie das Projekt, indem Sie die neue Aufgabe hinzufügen
      if (savedTask.projectId) {
        await Project.findByIdAndUpdate(savedTask.projectId, 
          { $push: { tasks: savedTask._id } });
      }
  
      res.status(201).json(savedTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

// READ: Alle Aufgaben abrufen
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ: Eine spezifische Aufgabe anhand ihrer ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE: Eine Aufgabe aktualisieren
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE: Eine Aufgabe löschen
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
