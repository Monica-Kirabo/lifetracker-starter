
const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Nutrition=require("../models/nutrition")
const security=require("../middleware/security")
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

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);
    const publicUser = await User.makePublicUser(user);
    return res.status(200).json({ user: publicUser });
  } catch (err) {
    next(err);
  }
});
// router.post("/Recordnutrition", async (req, res, next) => {
//   try {
   
//     console.log("i am req",req.body)
//     const nutrition = await Nutrition.AddNutrition(req.body);
//     return res.status(201).json({ nutrition });
//   } catch (err) {
//     console.log(err.stack);
//     next(err);
//   }
// });
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