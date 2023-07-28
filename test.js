const Tour = require('./models/TourModel')
Tour.create({
    title: "Tour test",
    days: 5,
    schedule: " from a to b",
    transportation: "vehicle",
    price: 100
})