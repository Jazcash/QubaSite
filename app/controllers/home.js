var express = require("express"),
	router = express.Router();

module.exports = function(app) {
	app.use("/", router);
};

router.get("/", function(req, res, next) {
	res.render("index", {
		title: "Quba Site | Homepage",
	});
});

router.get("/about", function(req, res, next) {
	res.render("about", {
		title: "Quba Site | About",
	});
});

router.get("/services", function(req, res, next) {
	res.render("services", {
		title: "Quba Site | Services",
	});
});

router.get("/tech", function(req, res, next) {
	res.render("tech", {
		title: "Quba Site | Technology",
	});
});
