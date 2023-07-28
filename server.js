// index.js
const express = require('express');
const app = express();
const PORT = 3000; // You can change the port number if needed
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.get('/', function (req, res) {
    res.send("Home")
    console.log(req.ip)
})
app.get('/posts', (req, res) => {
    setTimeout(() => {
        res.send('Hi');
    }, 5000);
});

async function logMovies() {
    setTimeout(() => {
        return 1
    }, 1000);
    console.log('two')
}
logMovies()

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});