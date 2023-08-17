const router = require("express").Router();
const { isAuthenticated } = require('./../middleware/jwt.middleware.js');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/users", isAuthenticated, (req, res, next) => {

  res.status(200).json(req.payload);

});

router.put("/users", isAuthenticated, (req, res, next) => {

  const { image } = req.body


  Project.findByIdAndUpdate(req.payload._id, req.body, { new: true })
    .then((updatedProject) => res.json(updatedProject))
    .catch(error => res.json(error));

});

router.post("/upload", (req, res, next) => {

});

module.exports = router;