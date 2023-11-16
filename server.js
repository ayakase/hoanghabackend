// index.js
const express = require("express");
const app = express();
const PORT = 3000; // You can change the port number if needed
const cors = require("cors");
const path = require('path');

//client
const clientAdvisoryRoute = require("./controllers/client/advisoryRoute");
const clientCategoryRoute = require("./controllers/client/categoryRoute");
const clientRegionRoute = require("./controllers/client/regionRoute");
const clientLocationRoute = require("./controllers/client/locationRoute");
const clientHotTourRoute = require("./controllers/client/hotTourRoute");
const clientEachTourRoute = require("./controllers/client/eachTourRoute");
const clientDiscountRoute = require("./controllers/client/discountRoute");
const clientEachPostRoute = require("./controllers/client/eachPostRoute");
const clientOrderRoute = require("./controllers/client/orderRoute");
const clientCarouselRoute = require("./controllers/client/carouselRoute")
const clientSlideRoute = require("./controllers/client/slideRoute")
const clientSearchRoute = require("./controllers/client/searchRoute")
const clientInitialRoute = require("./controllers/client/initialRoute")

//admin
const adminTourRoute = require("./controllers/admin/tourManageRoute");
const adminHotTourRoute = require("./controllers/admin/hotTourManageRoute");
const adminAdvisoryRoute = require("./controllers/admin/advisoryManageRoute");
const adminOrderRoute = require("./controllers/admin/orderManageRoute");
const adminLibraryRoute = require("./controllers/admin/libraryManageRoute");
const adminPostRoute = require("./controllers/admin/postManageRoute");
const adminSlideRoute = require("./controllers/admin/sliderManageRoute");
const adminCountRoute = require("./controllers/admin/countManageRoute");
const adminEachOrderRoute = require("./controllers/admin/eachOrderRoute");
const adminRegionRoute = require("./controllers/admin/regionManageRoute");
const adminLocationRoute = require("./controllers/admin/locationManageRoute");
const adminNotificationRoute = require("./controllers/admin/notificationManageRoute");
const req = require("express/lib/request");
require("dotenv").config();
app.use(
  cors({
    origin: process.env.FE_URL,
  })
);
app.set("trust proxy", true);

//client
app.use("/client/advisory", clientAdvisoryRoute);
app.use("/client/category", clientCategoryRoute);
app.use("/client/hottour", clientHotTourRoute);
app.use("/client/order", clientOrderRoute);
app.use("/client/each-tour", clientEachTourRoute);
app.use("/client/each-post", clientEachPostRoute);
app.use("/client/carousel", clientCarouselRoute)
app.use("/client/slide", clientSlideRoute)
app.use("/client/search", clientSearchRoute)
app.use("/client/initial", clientInitialRoute)
app.use("/client/region", clientRegionRoute)
app.use("/client/location", clientLocationRoute)
app.use("/client/discount", clientDiscountRoute)
//admin
app.use("/admin/tour", adminTourRoute);
app.use("/admin/hottour", adminHotTourRoute);
app.use("/admin/advisory", adminAdvisoryRoute);
app.use("/admin/order", adminOrderRoute);
app.use("/admin/library", adminLibraryRoute);
app.use("/admin/post", adminPostRoute);
app.use("/admin/slider", adminSlideRoute);
app.use("/admin/count", adminCountRoute);
app.use("/admin/each-order", adminEachOrderRoute);
app.use("/admin/region", adminRegionRoute);
app.use("/admin/location", adminLocationRoute);
app.use("/admin/notification", adminNotificationRoute);

app.timeout = 60000;
app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT} and ENV is ${process.env.TEST}`
  );
});
