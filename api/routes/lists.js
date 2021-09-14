const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//create

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const listSave = await newList.save();
      res.status(201).json(listSave);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//get
router.get("/", verify, async (req, res) => {
  const type = req.query.type;
  const genre = req.query.genre;
  let list = [];
  try {
    if (type) {
      if (genre) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type, genre: genre } },
        ]);
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    var deleteList = req.params.id;
    await List.findByIdAndDelete(deleteList);
    res.status(201).json("The list has been deleted.");
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;
