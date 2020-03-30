var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
})

app.get("/campgrounds", function (req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://i.ytimg.com/vi/EUU4KkezkI0/maxresdefault.jpg"},
        {name: "Granite Beach", image: "https://cdn-blog.queensland.com/wp-content/uploads/2017/01/whitehaven-beach-camping-691x461.jpg" },
        {name: "Mountain Goats' Rest", image: "https://cdn-co.milespartnership.com/sites/default/master/files/Wupperman-Campground-near-Lake-City%2C-Colorado.-Photo-by-Mary-Carkin%2C-Lake-City-Switchbacks..jpg" },
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.listen(3000, function () {
    console.log("Yelp Camp server has Started!")
})