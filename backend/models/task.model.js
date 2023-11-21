const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  dueDate: Date,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' } // Referenz auf das Projekt
  // Weitere Felder nach Bedarf
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
