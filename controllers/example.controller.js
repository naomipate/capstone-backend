// // DEPENDENCIES
// const express = require("express");
// const router = express.Router();
// let exampleModel = require("../models/example.model");

// // Make sure your model is working
// console.log(exampleModel);

// // GET
// router.route("/:id").get(async (req, res) => {
//   const { id } = req.params;

//   const friendsWishlist = await friendsWishlist(id);

//   if (!friendsWishlist) {
//     res.status(400).json({
//       status: false,
//       message: "Id not found!",
//     });
//   } else {
//     res.json(friendsWishlist);
//   }
// });
// // router.get("/:id", (req, res) => {
// //   // Controller logic to get a single item
// //   const { id } = req.params;
// //   res.status(200).send(exampleModel[`${id}`]);
// // });

// router.get("/", (req, res) => {
//   // Controller logic to get all items
//   res.status(200).send(exampleModel);
// });

// // POST
// router.post("/", (req, res) => {
//   // Controller logic to create a new item
// });

// // EDIT
// router.put("/:id", (req, res) => {
//   // Controller logic to edit an item
// });

// // DELETE
// router.delete("/:id", async (req, res) => {
//   // Controller logic to delete an item
//   const { id } = req.params;
//   const deletedWishlist = await deleteWishlist(id);
//   res.status(200).send(exampleModel[`${id}`]);
// });

// // EXPORT
// module.exports = router;
