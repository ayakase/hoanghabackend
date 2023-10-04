// index.js
const express = require("express");
const app = express();
const PORT = 3000; // You can change the port number if needed
const cors = require("cors");
//client
const clientAdvisoryRoute = require("./controllers/client/advisoryRoute");
const clientTourRoute = require("./controllers/client/tourRoute");
const clientHotTourRoute = require("./controllers/client/hotTourRoute");
const clientEachTourRoute = require("./controllers/client/eachTourRoute");
const clientOrderRoute = require("./controllers/client/orderRoute");
const clientCarouselRoute = require("./controllers/client/carouselRoute")
//admin
const adminTourRoute = require("./controllers/admin/tourManageRoute");
const adminHotTourRoute = require("./controllers/admin/hotTourManageRoute");
const adminAdvisoryRoute = require("./controllers/admin/advisoryManageRoute");
const adminOrderRoute = require("./controllers/admin/orderManageRoute");
const adminLibraryRoute = require("./controllers/admin/libraryManageRoute");
const adminPostRoute = require("./controllers/admin/postManageRoute");
const req = require("express/lib/request");
require("dotenv").config();
app.use(
  cors({
    origin: process.env.FE_URL,
  })
);
console.log(process.env.FE_URL);
app.set("trust proxy", true);
app.get("/connect", (req, res) => {
  res.send("Connected to Backend");
});
//client
app.use("/client/advisory", clientAdvisoryRoute);
app.use("/client/tour", clientTourRoute);
app.use("/client/hottour", clientHotTourRoute);
app.use("/client/order", clientOrderRoute);
app.use("/client/each-tour", clientEachTourRoute);
app.use("/client/carousel", clientCarouselRoute)

//admin
app.use("/admin/tour", adminTourRoute);
app.use("/admin/hottour", adminHotTourRoute);
app.use("/admin/advisory", adminAdvisoryRoute);
app.use("/admin/order", adminOrderRoute);
app.use("/admin/library", adminLibraryRoute);
app.use("/admin/post", adminPostRoute);

app.timeout = 60000;
app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT} and ENV is ${process.env.TEST}`
  );
});
