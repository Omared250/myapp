const express = require('express');
const app = express();

// making endpoints with query

// adding two values
const add = (req, res) => {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    const adding = value1 + value2;
    res.send('The result for this operation is: ' + adding.toString())
}

app.get('/add', add); 

// substracting two values
const substract = (req, res) => {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    const substracting = value1 - value2;
    res.send('The result for this operation is: ' + substracting.toString())
}

app.get('/substract', substract);

// multiplying two values
const multiply = (req, res) => {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    const multiplying = value1 * value2;
    res.send('The result for this operation is: ' + multiplying.toString())
}

app.get('/multiply', multiply);

// dividing two value
const divide = (req, res) => {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    const dividing = value1 / value2;
    res.send('The result for this operation is: ' + dividing.toString())
}

app.get('/divide', divide);

// making end points with parameters

// adding two values with parameters
const addParameters = (req, res) => {
    const value1 = parseInt(req.params.value1);
    const value2 = parseInt(req.params.value2);
    res.send('The result for this operation is: ' + (value1 + value2).toString());
}

app.get('/add/:value1/:value2', addParameters)

// substracting two values with paramaters
const substractParameters = (req, res) => {
    const value1 = parseInt(req.params.value1);
    const value2 = parseInt(req.params.value2);
    res.send('The result for this operation is: ' + (value1 - value2).toString());
}

app.get('/substract/:value1/:value2', substractParameters)

// miltipliying two values with paramaters
const multiplyParameters = (req, res) => {
    const value1 = parseInt(req.params.value1);
    const value2 = parseInt(req.params.value2);
    res.send('The result for this operation is: ' + (value1 * value2).toString());
}

app.get('/multiply/:value1/:value2', multiplyParameters)

// dividing two values with paramaters
const divideParameters = (req, res) => {
    const value1 = parseInt(req.params.value1);
    const value2 = parseInt(req.params.value2);
    res.send('The result for this operation is: ' + (value1 / value2).toString());
}

app.get('/divide/:value1/:value2', divideParameters)
 

app.listen(3000, () => console.log("Server is up and running"))