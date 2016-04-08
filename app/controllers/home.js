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
