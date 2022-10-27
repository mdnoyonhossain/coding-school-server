const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('Coding School Server is Running');
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const courseNo = course.find(cours => cours._id === id);
    res.send(courseNo)
})

app.get('/all-course', (req, res) => {
    res.send(course)
})

app.listen(port, () => {
    console.log('Coding School Server running on port', port);
})