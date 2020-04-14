const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const Profile = require("../models/ProfileSchema");
const jwt = require("jsonwebtoken");
const JWT_SECRET_TOKEN = process.env.JWT_SECRET;

//Create user
router.post("/signup", async (req, res) => {
	try {
		const { uid, displayName, email, avatar, birthDate } = req.body;
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			res.json({ error: "User Already Exists" });
		}
		const newUser = new User({
			uid,
			displayName,
			email,
			membership: "student",
		});
		const createProfile = new Profile({
			user: uid,
			displayName,
			email,
			avatar,
			birthDate,
		});
		await newUser.save();
		await createProfile.save();
		const payload = {
			id: req.body.uid,
		};
		jwt.sign(payload, JWT_SECRET_TOKEN, { expiresIn: 3500 }, (err, token) => {
			if (err) {
				res.json({ msg: err });
			} else {
				res.json({ token });
			}
		});
	} catch (e) {
		return res.status(404).json({ msg: e.message });
	}
});

// Sing IN
router.post("/signin", async (req, res) => {
	try {
		// IF USER ALREADY EXISTS
		let userData = await User.findOne({ email: req.body.email });
		if (!userData) {
			res.status(400).json({ msg: "User not found" });
		}
		// VERIFY USER
		if (userData.uid !== req.body.uid) {
			res.status(400).json({ errors: [{ msg: "Invalid User" }] });
		}
		//JWT RETURN
		const payload = {
			id: userData.uid,
		};
		jwt.sign(payload, JWT_SECRET_TOKEN, { expiresIn: 3600 }, (err, token) => {
			if (err) {
				res.json({ msg: err });
			} else {
				res.json({ token });
			}
		});
	} catch (e) {
		res.status(500).send("SERVER ERROR!");
	}
});

module.exports = router;
