const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
	const getToken = req.header("x-auth-token");

	if (!getToken) {
		return res.status(401).json({ msg: "No token in header" });
	}

	try {
		const decoded = jwt.verify(getToken, SECRET_TOKEN);
		res.authToken = decoded;
		next();
	} catch (error) {
		res.status(401).json({
			msg: "Invalid Token",
		});
	}
};
