import express from "express";
import {
  deleteData,
  getData,
  postData,
  putData,
  getDataById,
  // getOne,
  // removeData,
} from "../controllers/mobileController.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/", getData);
router.get("/:idn", getDataById);
// router.get("/brand/:brand", getOne);
// router.delete("/:id", removeData);
router.post("/", postData);
router.put("/:id", putData);
router.delete("/:id", deleteData);

export default router;
