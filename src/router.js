const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const mockUser = {
    username: "authguy",
    password: "mypassword",
    profile: {
        firstName: 'Toby',
        lastName: 'Carlo',
        age: 19
    }
};

const secret = "secret12345"

router.post("/login", (req, res) => {

});

router.get("/profile", (req, res) => {
  
});


module.exports = router;
