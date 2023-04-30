const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const travels = require('./data/travel.json');

app.use(cors())
app.get('/', (req, res) => {
    res.send("Travel Server Running");
})
app.get('/travels', (req, res) => {
    res.send(travels)
})
app.get('/travels/:id', (req, res) => {
    const id = req.params.id;
    const travelsSelect = travels.find(n => n.id === id);
    res.send(travelsSelect);
})
app.listen(port, () => {
    console.log(`Travel Server on Port :${port}`);
})