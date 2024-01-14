const express = require("express");
const {
    createResturantController,
    getAllResturantController,
    getResturantByIdController,
    deleteResturantController,
  } = require("../controllers/resturantController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET RESTURANT ||GET
router.post("/create", authMiddleware, createResturantController);

// GET ALL RESTURANTS || GET
router.get("/getAll", getAllResturantController);

// GET RESTURANT BY ID || GET
router.get("/get/:id", getResturantByIdController);

// DELETE RESTURANT || DELETE
router.delete("/delete/:id", authMiddleware, deleteResturantController);

module.exports = router;
