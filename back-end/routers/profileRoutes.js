const express = require("express");
const router = express.Router();
const auth = require("../middelware/auth");
const Profile = require("../models/ProfileSchema");
const Course = require("../models/CourseSchema");

//MY PROFILE
router.get("/me", auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: res.authToken.id });
		if (!profile) {
			res.json({ msg: "No Profile Found" });
		}
		res.json(profile);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
});

//Update Profile
router.post("/", auth, async (req, res) => {
	const { address, bio, gender, twitter, facebook, github } = req.body;
	const profileFields = {};
	if (address) profileFields.address = address;
	if (bio) profileFields.bio = bio;
	if (gender) profileFields.gender = gender;
	profileFields.social = {};
	if (twitter) profileFields.social.twitter = twitter;
	if (facebook) profileFields.social.facebook = facebook;
	if (github) profileFields.social.github = github;
	try {
		let profile = await Profile.findOne({ user: res.authToken.id });
		if (profile) {
			// IF ALRADY PROFILE EXISTS THEN UPDATE
			profile = await Profile.findOneAndUpdate(
				{ user: res.authToken.id },
				{ $set: profileFields },
				{ new: true }
			);
			return res.json(profile);
		}
		await updateProfile.save();
		res.json(updateProfile);
	} catch (e) {
		return res.status(404).json({ msg: e.message });
	}
});

//Add Wishlist
router.put("/wish/:courseId", auth, async (req, res) => {
	try {
		let profile = await Profile.findOne({ user: res.authToken.id });
		const populateProfile = {
			user: profile.user,
			name: profile.displayName,
		};
		let course = await Course.findById(req.params.courseId);
		//profile
		const wishArrayInProfile = profile.courses.wishlist.map((x) => x._id);
		const courseIndxInProfile = wishArrayInProfile.indexOf(req.params.courseId);
		//Course
		const wishArrayInCourse = course.wishlist.map((x) => x._id);
		const userIndxInCourse = wishArrayInCourse.indexOf(req.params.courseId);

		if (courseIndxInProfile === -1 && userIndxInCourse === -1) {
			profile.courses.wishlist.unshift(course);
			await profile.save();
			course.wishlist.unshift(populateProfile);
			await course.save();
		} else {
			profile.courses.wishlist.splice(courseIndxInProfile, 1);
			await profile.save();
			course.wishlist.splice(userIndxInCourse, 1);
			await course.save();
		}
		res.json(profile);
	} catch (e) {
		return res.status(404).json({ msg: e.message });
	}
});

// Add Review
router.put("/review/:courseId", auth, async (req, res) => {
	const { rating, text } = req.body;
	try {
		const course = await Course.findById(req.params.courseId);
		const user = await User.findOne({ uid: res.authToken.id });
		const newReview = {
			user: user,
			rating,
			text,
		};
		course.review.unshift(newReview);
		// course.save();
		res.json(course);
	} catch (error) {
		return res.status(404).json({ msg: error.message });
	}
});

//Enrolled new Course
router.put("/enrolled/:courseId", auth, async (req, res) => {
	try {
		//Get Course Schema by id
		const course = await Course.findById(req.params.courseId);
		//Get Profile schema by uid
		const profile = await Profile.findOne({ user: res.authToken.id });
		//Check profile enrolled if already course exists then return an msg
		const enrolledCourse = profile.courses.enrolled.map((x) => x._id);
		const enrolledCourseIdx = enrolledCourse.indexOf(req.params.courseId);
		if (enrolledCourseIdx !== -1) {
			return res.status(400).json({ errors: [{ msg: "Already Enrolled" }] });
		} else {
			//Update course students with user name and uid
			const newStudent = {
				uid: res.authToken.id,
				displayName: profile.displayName,
			};
			course.student.unshift(newStudent);
			//Update profile course enrolled with course object
			profile.courses.enrolled.unshift(course);
			//save to database
			await profile.save();
			await course.save();
			//return course response
			res.json(profile);
		}
	} catch (error) {
		return res.status(404).json({ msg: error.message });
	}
});

module.exports = router;
