const express = require('express');
const app = express();

const add = (req, res) => {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    const adding = value1 + value2;
    res.send((adding).toString())
}

app.get('/add', add); 

// const substract = (req, res) => {
//     const value1 = req.query.value1;
//     const value2 = req.query.value2;
//     const substracting = value1 - value2;
//     res.send(substracting)
// }

// app.get('/substract', substract);

app.listen(3000, () => console.log("Server is up and running"))