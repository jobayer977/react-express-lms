const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	uid: {
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
	membership: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = User = mongoose.model("user", UserSchema);
