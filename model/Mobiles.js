// import mongoose, { schema } from "mongoose";

// const movieschema = new schema({
//   hero: String,
//   director: String,
//   salary: Number,
// });

// const apple = mongoose.model("apple", movieschema);

// export default apple;

import mongoose, { Schema } from "mongoose";

const mobileSchema = new Schema({
  brand: String,
  model: String,
  price: Number,
});

const samsung = mongoose.model("samsung", mobileSchema);
// console.log(samsung)
export default samsung;
