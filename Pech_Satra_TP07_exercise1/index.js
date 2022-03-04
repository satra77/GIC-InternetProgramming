const express = require('express');
const app = express();
const fs = require('fs')

app.get('/', (req, res) => {
    fs.readFile('./views/crudBookShop.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(data);
    })
})

app.get('/detail', (req, res) => {
    fs.readFile('./views/details/fetchapi-detail.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        res.send(data);
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000/");
})