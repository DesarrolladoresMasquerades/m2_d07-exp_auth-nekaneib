const router = require("express").Router();
const checkLogin = require("../../middlewares/auth.middleware")

/* GET home page */
router.get("/", checkLogin, (req, res, next) => {
  res.render("profile");
});

module.exports = router;
