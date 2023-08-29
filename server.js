// index.js
const express = require('express');
const app = express();
const PORT = 3000; // You can change the port number if needed
const cors = require('cors')
const footerRoute = require('./controllers/footerRoute');
const adminTourRoute = require('./controllers/admin/tourRoute');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.set('trust proxy', true);
app.use('/footer', footerRoute);
app.use('/admin/tour', adminTourRoute);

// async function logMovies() {
//     setTimeout(() => {
//         return 1
//     }, 1000);
//     console.log('two')
// }
// logMovies()

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} and ENV is ${process.env.TEST}`);
});