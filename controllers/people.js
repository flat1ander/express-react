////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const People = require("../models/people");
const router = express.Router();

// ROUTES////////////////////////////////
// GET
router.get("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.find({}));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

// POST
router.post("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

// PUT
router.put('/:id', async (req, res) => {
  try {
      res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new: true}));
  } catch (error) {
      res.status(400).json(error);
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    res.json(await People.findByIdAndRemove(req.params.id));
} catch (error) {
    res.status(400).json(error);
}
});



module.exports = router;