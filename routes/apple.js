// import express from "express";

// const router = express.Router();

// router.get("/iphone15", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// router.get("/iphone14", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// router.get("/iphone13", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// router.get("/iphone12", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// router.get("/iphone11", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// router.get("/iphoneSE", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// export default router;

import express from "express";

const router = express.Router();

router.get("/iphone11", (req, res) => {
  res.send("<h1>Iphone 11 Data</h1>");
});
router.get("/iphone12", (req, res) => {
  res.send("<h1>Iphone 12 Data</h1>");
});
router.get("/iphone13", (req, res) => {
  res.send("<h1>Iphone 13 Data</h1>");
});
router.get("/iphone13pro", (req, res) => {
  res.send("<h1>Iphone 13 pro Data</h1>");
});
router.get("/iphone14", (req, res) => {
  res.send("<h1>Iphone 14 Data</h1>");
});
router.get("/iphone14pro", (req, res) => {
  res.send("<h1>Iphone 14 pro Data</h1>");
});
router.get("/iphone15", (req, res) => {
  res.send("<h1>Iphone 15 Data</h1>");
});

export default router;
