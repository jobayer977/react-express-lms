const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	thumbnail: {
		type: String,
	},
	price: {
		type: String,
	},
	author: {
		type: String,
	},
	description: {
		type: String,
	},
	student: [],
	wishlist: [],
	review: [
		{
			user: {
				type: Object,
			},
			rating: {
				type: String,
			},
			text: {
				type: String,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	outline: [
		{
			moduleNo: {
				type: String,
			},
			moduleTitle: {
				type: String,
			},
			complected: {
				type: Boolean,
			},
			lesson: [
				{
					lessonNo: {
						type: Number,
					},
					moduleNo: {
						type: String,
					},
					lessonTitle: {
						type: String,
					},
					lessonDesc: {
						type: String,
					},
					status: {
						type: Boolean,
					},
					teachersNote: [
						{
							referenceTitle: {
								type: String,
							},
							referenceLinks: {
								type: String,
							},
						},
					],
					download: {
						attachment: {
							type: String,
						},
						attachmentLink: {
							type: String,
						},
					},
					duration: {
						type: String,
					},
					video: {
						type: String,
					},
					momentum: {
						happy: [],
						sad: [],
						anger: [],
					},
					date: {
						type: Date,
						default: Date.now,
					},
				},
			],
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Course = mongoose.model("course", CourseSchema);
