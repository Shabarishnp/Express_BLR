// import mobiles from "../data/mobiles.js";

// export const getData = (req, res) => {
//   res.json(mobiles);
// };
// export const postData = (req, res) => {
//   res.send("posting data controller");
// };
// export const putData = (req, res) => {
//   res.send("updating data controller");
// };
// export const deleteData = (req, res) => {
//   res.send("Deleting data controller");
// };

import Samsung from "../model/Mobiles.js";

// export const getData = (req, res) => {};
export const getData = async (req, res) => {
  try {
    const da = await Samsung.find();
    res.status(200).json(da);
  } catch (err) {
    res.status(500).send((err) => console.log(err));
  }
};

export const getDataById = async (req, res) => {
  try {
    const da = await Samsung.findById(req.params.idn);
    if (da !== null) {
      res.status(200).json(da);
    } else {
      res.status(404).send("Id not found");
    }
  } catch (error) {
    res.status(500).send((err) => console.log(err));
  }
};

// export const getOne = async (req, res) => {
//   const data = await Samsung.findOne({ brand: req.params.brand });
//   res.json(data);
// };

// export const postData = async (req, res) => {
//   const model = new Samsung(req.body);
//   const neww = await model.save();
//   res.json(model);
// };
export const postData = async (req, res) => {
  try {
    const model = new Samsung(req.body);
    const neww = await model.save();
    res.status(201).json(neww);
  } catch (error) {
    res.status(500).send((err) => console.log(err));
  }
};

// export const putData = async (req, res) => {
//   const content = req.body;
//   const updatedData = await Samsung.findByIdAndUpdate(req.params.id, content, {
//     new: true,
//   });
//   res.json(updatedData);
// };

// export const putData = (req, res) => {
//   res.send("updating data controller");
// };

export const putData = async (req, res) => {
  try {
    const content = req.body;
    const updatedData = await Samsung.findByIdAndUpdate(
      req.params.id,
      content,
      {
        new: true,
      }
    );
    if (updatedData) {
      res.status(200).json(updatedData);
    } else {
      res.status(404).send("id not found");
    }
  } catch (error) {
    res.status(500).send((err) => console.log(err));
  }
};

// export const deleteData = (req, res) => {
//   res.send("Deleting data controller");
// };

// export const removeData = async (req, res) => {
//   await Samsung.findByIdAndDelete(req.params.id);
//   res.send("Deleted data");
// };

export const deleteData = async (req, res) => {
  try {
    await Samsung.findByIdAndDelete(req.params.id);
    res.send("ID Deleted");
  } catch (error) {
    res.status(500).send((err) => console.log(err));
  }
};
