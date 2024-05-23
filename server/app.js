const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

let products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
];

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/products', (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.json(newProduct);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
