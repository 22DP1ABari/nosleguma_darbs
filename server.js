const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const users = [];
const tournaments = [];

// reģistrācija
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    users.push({ username, email, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// izveidot turnīru
app.post('/tournament', (req, res) => {
    const { name, game, organizer } = req.body;
    if (!name || !game || !organizer) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    tournaments.push({ name, game, organizer });
    res.status(201).json({ message: 'Tournament created successfully' });
});


app.get('/tournaments', (req, res) => {
    res.json(tournaments);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
