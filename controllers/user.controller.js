const express = require("express");
const router = express.Router();

const { createUser } = require("../queries/user");

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const createdUser = await createUser(req.body);
    res.status(200).json(createdUser[0]);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

module.exports = router;
