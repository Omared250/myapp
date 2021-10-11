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

// substracting two values
const substract = (req, res) => {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    const substracting = value1 - value2;
    res.send('The result for this operation is: ' + substracting.toString())
}

// multiplying two values
const multiply = (req, res) => {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    const multiplying = value1 * value2;
    res.send('The result for this operation is: ' + multiplying.toString())
}

// dividing two value
const divide = (req, res) => {
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    const dividing = value1 / value2;
    res.send('The result for this operation is: ' + dividing.toString())
}

// making end points with parameters

// adding two values with parameters
const addParameters = (req, res) => {
    const value1 = parseInt(req.params.value1);
    const value2 = parseInt(req.params.value2);
    res.send('The result for this operation is: ' + (value1 + value2).toString());
}

// substracting two values with paramaters
const substractParameters = (req, res) => {
    const value1 = parseInt(req.params.value1);
    const value2 = parseInt(req.params.value2);
    res.send('The result for this operation is: ' + (value1 - value2).toString());
}

// miltipliying two values with paramaters
const multiplyParameters = (req, res) => {
    const value1 = parseInt(req.params.value1);
    const value2 = parseInt(req.params.value2);
    res.send('The result for this operation is: ' + (value1 * value2).toString());
}

// dividing two values with paramaters
const divideParameters = (req, res) => {
    const value1 = parseInt(req.params.value1);
    const value2 = parseInt(req.params.value2);
    res.send('The result for this operation is: ' + (value1 / value2).toString());
}

//making a logger
const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited omar at ${visitTime.toLocaleString()}`);
    next();
};
app.use(myLogger);

app.get('/add', add);
app.get('/substract', substract);
app.get('/multiply', multiply);
app.get('/divide', divide);
app.get('/add/:value1/:value2', addParameters)
app.get('/substract/:value1/:value2', substractParameters)
app.get('/multiply/:value1/:value2', multiplyParameters)
app.get('/divide/:value1/:value2', divideParameters)

app.listen(3000, () => console.log("Server is up and running"))