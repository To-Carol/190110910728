const { Student } = require("../../modules/mongodb");
module.exports = async (req, res) => {
  await Student.findOneAndUpdate(
    { _id: req.query.id },
    { password: req.body.password }
  );
  res.redirect("/student");
};
