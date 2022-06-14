const express = require("express");
const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");

const router = express.Router();

const mockUser = {
    username: "liltobe",
    password: "mypassword",
    profile: {
        firstName: 'Toby',
        lastName: 'Carlo',
        age: 19
    }
};

const secret = "secret12345"

router.post("/login", (req, res) => {
    if (req.body.username === mockUser.username && req.body.password === mockUser.password) {
        res.json(jwt.sign({
            username: mockUser.username
        }, secret))
    }
    else {
        res.status(400)
        res.json({
            error: "Invalid username and/or password"
        })
    }
});

router.get("/profile", (req, res) => {
    try {
        const token = req.headers["authorisation"];
        jwt.verify(token, secret);
        res.status(200).json({
            profile: mockUser.profile
        });
    } catch (err) {
        res.status(401).json("Unauthorised");
    }
});

module.exports = router;
