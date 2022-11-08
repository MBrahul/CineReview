const express = require('express');
const router = express.Router();
const User = require("../models/User")
var bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const Admin = require('../models/Admin');


// for create new user -->


router.post('/createUser', [body('email', 'Enter correct email').isEmail(), body('password', 'password must have at least 5 characters').isLength({ min: 5 }),], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;
        let user = await User.findOne({ email: email });

        if (user) {

            res.status(200).json({
                status: false,
                error: 'A user already exists with this email id'
            });
        }
        else {
            let salt = await bcrypt.genSaltSync(10);
            let securedPassword = await bcrypt.hashSync(password, salt);

            let newUser = {
                name: name,
                email: email,
                password: securedPassword
            }
            user = await User.create(newUser).then((user) => {
                res.json({
                    status: true,
                    user: newUser
                })
            })
        }
    }
    catch (err) {
        res.status(400).json({ error: "Internal Server Error" });
    }
});




// FOR LOG IN -- /api/auth/login  


router.post('/login', [body('email', 'Enter correct email').isEmail(), body('password', 'password must have at least 5 characters').isLength({ min: 5 }),], async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (!user) {
            res.status(404).json("Enter correct credentials");
        }
        else {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    res.status(200).json({
                        status: true,
                        user: user
                    });
                }
                else {
                    res.status(404).json({
                        status: false
                    });
                }
            });
        }
    }
    catch (err) {
        res.status(400).json({ error: "Internal Server Error" });
    }

});


// FOR DELETE USER -- /api/auth/deleteUser 

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        User.findByIdAndDelete(req.params.id).then(() => {
            res.json({ status: true });
        })
    } catch (error) {
        res.json({ error: "internal server error" });
    }
})

// for admin 
router.post('/adminLogin', [body('email', 'Enter correct email').isEmail(), body('password', 'password must have at least 5 characters').isLength({ min: 5 })], async (req, res) => {
    try {
        const { email, password } = req.body;
        let admin = await Admin.findOne({ email: email });
        if (!admin) {
            res.status(404).json({status:false});
        }
        else {
            bcrypt.compare(password, admin.password, function (err, result) {
                if (result) {
                    res.status(200).json({
                        status: true,
                        admin:admin
                    });
                }
                else {
                    res.status(404).json({
                        status: false
                    });
                }
            });
        }
    }
    catch (err) {
        res.status(400).json({ status:false,error: "Internal Server Error" });
    }

})


module.exports = router