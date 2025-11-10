// In-memory data store
let inMemoryStore = {};

const getHealth = (req, res) => {
    res.status(200).json({ status: 'ok' });
};

const getTest = (req, res) => {
    res.status(200).json({ message: 'GET request successful', data: { sample: 'data' } });
};

const postTest = (req, res) => {
    const payload = req.body;
    inMemoryStore = payload;
    res.status(201).json({ message: 'POST request successful', data: inMemoryStore });
};

module.exports = {
    getHealth,
    getTest,
    postTest
};