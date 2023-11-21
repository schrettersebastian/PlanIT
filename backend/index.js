const express = require('express');
const app = express();
const port = 3001; 
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task.routes');
const projectRoutes = require('./routes/project.routes');
const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.use(express.json()); 
app.use('/api/auth', authRoutes);


app.use((req, res, next) => {
  console.log('Anfrage empfangen:', req.method, req.path);
  next();
});

mongoose.connect('mongodb://127.0.0.1:27017/PlanITDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB");
});

app.use('/api/tasks', taskRoutes); 
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
