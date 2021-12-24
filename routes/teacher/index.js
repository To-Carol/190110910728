const { Teacher } = require("../../modules/mongodb");
module.exports = async (req, res) => {
  const user = req.session.user;
  const teacher = await Teacher.findOne({ username: user.username });
  res.render("teacher/index", { user, teacher });
};
