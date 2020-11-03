const express = require("express");
const router = express.Router();
const Events = require("../models/events.js");

router.get("/", (req, res) => {
  Events.find({})
    .then(dbEvents => {
      res.json(dbEvents);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", ({ body }, res) => {
  Events.create(body)
  .then(dbEvents => {
    res.json(dbEvents);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});  

// router.delete(function (req, res) {
//   Events.findByIdAndRemove(req.params.id, (err, events) => {
//     if (err) return res.status(500).send(err);
//     const response = {
//         message: "Event successfully deleted",
//         id: req.params.id
//     };
//     return res.status(200).send(response);
//   })
// });  

module.exports = router;