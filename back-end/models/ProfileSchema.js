const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
	user: {
		type: String,
	},
	displayName: {
		type: String,
	},
	email: {
		type: String,
	},
	avatar: {
		type: String,
	},
	address: {
		type: String,
	},
	bio: {
		type: String,
	},
	birthDate: {
		type: Date,
	},
	gender: {
		type: String,
	},
	membership: {
		type: String,
	},
	social: {
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		github: {
			type: String,
		},
	},
	courses: {
		wishlist: [],
		enrolled: [],
		active: [],
		complected: [],
	},

	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
