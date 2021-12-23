const { Teacher } = require("../../modules/mongodb");
module.exports = async (req, res) => {
  const msg = req.query.msg;
  const user = req.session.user;
  const _id = req.query.id;
  const teacher = await Teacher.findOne({ _id });
  res.render("manager/update_teacher", { user, teacher, msg });
};
