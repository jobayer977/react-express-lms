const express = require("express");
const router = express.Router();
const auth = require("../middelware/auth");
const Course = require("../models/CourseSchema");
const User = require("../models/UserSchema");
const Profile = require("../models/ProfileSchema");

//Get all courses
router.get("/", async (req, res) => {
	try {
		const courses = await Course.find();
		res.json(courses);
	} catch (error) {
		console.log(error.message);
	}
});

//Created new course
router.post("/", auth, async (req, res) => {
	const { title, thumbnail, price, author, description } = req.body;
	try {
		const user = await User.findOne({ uid: res.authToken.id });
		if (user.membership !== "student") {
			res.json({
				msg: "You don't create Courses",
			});
		}
		const course = new Course({
			title,
			thumbnail,
			price,
			author,
			description,
		});
		await course.save();
		res.json(course);
	} catch (e) {
		return res.status(404).json({ msg: e.message });
	}
});

// Create module
router.put("/module/:courseId", auth, async (req, res) => {
	const { moduleNo, moduleTitle } = req.body;
	try {
		//Get course by id
		const course = await Course.findById(req.params.courseId);
		//Create outline object and save into database
		const newModule = {
			moduleNo,
			moduleTitle,
		};
		course.outline.push(newModule);
		//Save
		course.save();
		//return course object
		res.json(course);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

// Create Lesson
router.put("/lesson/:courseId/:moduleId", auth, async (req, res) => {
	const {
		lessonNo,
		lessonTitle,
		lessonDesc,
		duration,
		video,
		attachment,
		attachmentLink,
	} = req.body;
	try {
		//Get course schema by id
		const course = await Course.findById(req.params.courseId);
		//Create new lesson in object
		const newCourse = {
			lessonNo,
			lessonTitle,
			lessonDesc,
			duration,
			video,
			download: { attachment, attachmentLink },
		};
		//Figure out module by module id
		const moduleId = course.outline.map((x) => x._id);
		const moduleIndx = moduleId.indexOf(req.params.moduleId);
		//Push into course schema lesson array
		course.outline[moduleIndx].lesson.push(newCourse);
		//Save into Database
		course.save();
		//response course object
		res.json(course);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

//Add Teacher's note
router.put("/note/:courseId/:moduleId/:lessonId", auth, async (req, res) => {
	const { referenceTitle, referenceLinks } = req.body;
	try {
		//Get course schema by id
		const course = await Course.findById(req.params.courseId);
		//Create new note in object
		const newNote = {
			referenceTitle,
			referenceLinks,
		};
		//Figure out module by module id
		const moduleId = course.outline.map((x) => x._id);
		const moduleIndx = moduleId.indexOf(req.params.moduleId);
		const getModule = course.outline[moduleIndx];
		//Figure out lesson
		const lessonId = getModule.lesson.map((x) => x._id);
		const lessonIndx = lessonId.indexOf(req.params.lessonId);
		//Push into course schema lesson array
		getModule.lesson[lessonIndx].teachersNote.push(newNote);
		//Save into Database
		course.save();
		//response course object
		res.json(course);
	} catch (e) {
		res.json({ msg: e.message });
	}
});
//momentum
router.put(
	"/momentum/:courseId/:moduleId/:lessonId",
	auth,
	async (req, res) => {
		const { moment } = req.body;
		try {
			const getUser = {
				user: res.authToken.id,
			};
			//Get course schema by id
			const course = await Course.findById(req.params.courseId);
			//Figure out module by module id
			const moduleId = course.outline.map((x) => x._id);
			const moduleIndx = moduleId.indexOf(req.params.moduleId);
			const getModule = course.outline[moduleIndx];
			//Figure out lesson
			const lessonId = getModule.lesson.map((x) => x._id);
			const lessonIndx = lessonId.indexOf(req.params.lessonId);
			// Push into course schema lesson array
			moment === "happy"
				? getModule.lesson[lessonIndx].momentum.happy.push(getUser)
				: "";
			moment === "sad"
				? getModule.lesson[lessonIndx].momentum.sad.push(getUser)
				: "";
			moment === "anger"
				? getModule.lesson[lessonIndx].momentum.anger.push(getUser)
				: "";
			//Save into Database
			course.save();
			// response course object
			res.json(course);
		} catch (e) {
			res.json({ msg: e.message });
		}
	}
);

module.exports = router;
