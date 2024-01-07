const express = require("express");
const router = express.Router();

const {
  productelement,
  productelementtesting,
  productsale
} = require("../controlers/project");

router.route("/").get(productelement);
router.route("/testing").get(productelementtesting);
router.route("/sale").get(productsale);

module.exports = router;
