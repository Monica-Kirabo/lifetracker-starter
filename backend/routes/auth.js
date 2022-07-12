

const express = require("express");
const router = express.Router();
const User = require("../models/users");
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register(req.body);
    return res.status(201).json({ user });
  } catch (err) {
    console.log(err.stack);
    next(err);
  }
});

module.exports = router;
// var express = require('express');
// var router = express.Router();

// // Home page route.
// router.get('/',  (req, res)=> {
//   res.send('Wiki home page');
// })

// // About page route.
// router.get('/about',  (req, res)=> {
//   res.send('About this wiki');
// })

// module.exports = router;