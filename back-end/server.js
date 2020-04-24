const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Init
const app = express();
useNewUrlParser: true;

//MIDDLEWARE
app.use(express.json({ extended: false }));
app.use(cors());

//ROUTES
app.use("/api/user", require("./routers/userRoutes"));
app.use("/api/profile", require("./routers/profileRoutes"));
app.use("/api/course", require("./routers/courseRoutes"));

//DB CONNECTION
mongoose.connect(
	process.env.MONGODB_URI,
	{
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	},
	() => {
		console.log("Database connected successfully");
	}
);

//App listen
if (process.env.NODE_ENV === "production") {
	app.use(express.static("../front-end/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../front-end/build", "index.html"));
	});
}

app.listen(process.env.PORT || 4000, function () {
	console.log("Express server listening on port 4000");
});
