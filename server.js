const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// HTML FILES
app.use('index.html',express.static(path.join(__dirname, 'index.html')));
app.use('about.html', express.static(path.join(__dirname, 'about.html')));
app.use('contact.html', express.static(path.join(__dirname, 'contact.html')));
app.use('products.html', express.static(path.join(__dirname, 'products.html')));

// CSS FILES
app.use('/css',express.static(path.join(__dirname, '/css')));

// SCSS FILES
app.use('/scss',express.static(path.join(__dirname, '/scss')));

// IMAGE FILES
app.use('/img',express.static(path.join(__dirname, '/img')));

// VENDOR FILES
app.use('/vendor',express.static(path.join(__dirname, '/vendor')));

app.get('/', (req, res) => {
    let html = fs.readFileSync(path.join(__dirname, 'index.html'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.get('/index.html', (req, res) => {
    let html = fs.readFileSync(path.join(__dirname, 'index.html'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.get('/about.html', (req, res) => {
    let html = fs.readFileSync(path.join(__dirname, 'about.html'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.get('/products.html', (req, res) => {
    let html = fs.readFileSync(path.join(__dirname, 'products.html'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.get('/contact.html', (req, res) => {
    let html = fs.readFileSync(path.join(__dirname, 'contact.html'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});