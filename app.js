const express = require('express');
const app = express();
const PORT = 3000;

// GET Endpoint - http://127.0.0.1:3000/
app.get('/', (req, res) => {
    res.send('Hello');
});


/**
 * Multiplies two numbers and returns the value.
 * @param {number} multiplicant first param
 * @param {number} multiplier second param 
 * @returns {number} product
 */
const multiply = (multiplicant, multiplier) => {
    const product = multiplicant * multiplier;
    return product;
};

app.get('/multiply', (req, res) => {
    try {
        const multiplicant = parseFloat(req.query.a);
        const multiplier = parseFloat(req.query.b);
        if (isNaN(multiplicant) || isNaN(multiplier)) throw new Error('Invalid values')
        console.log({multiplicant, multiplier});
        const product = multiply(multiplicant, multiplier)
        res.send(product.toString());
    } catch (err){
        console.error(err);
        res.send("Could not calculate product.")
    }
});

app.listen(PORT, () => console.log(
    `Listening at http://127.0.0.1:${PORT}`
));