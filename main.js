// import mongoose from "mongoose";
// mongoose
//   .connect(
//     "mongodb+srv://shabarishnp111:shabari18@cluster0.oxo53sl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("mongoose connected"))
//   .catch((err) => {
//     console.log(err);
//   });

import express from "express";
import appleRoute from "./routes/apple.js";
import samsungRoute from "./routes/samsung.js";
import mongoose from "mongoose";
// import router from "./routes/apple.js";

const app = express();
app.use(express.json()); 
app.use("/mobile/apple", appleRoute);
app.use("/mobile/samsung", samsungRoute);
// app.use("/mobile/router", router);

// console.log(mongoose);
mongoose
  .connect(
    "mongodb+srv://shabarishnp111:shabari18@cluster0.oxo53sl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(1010, () => {
  console.log("server connected");
});

