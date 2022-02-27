const Query = require("../models/queryModel");
const asyncHandler = require("express-async-handler");
const CreateQuery = asyncHandler(async (req, res) => {
  const { name, email, DnT, ask } = req.body;
  if (!name || !email || !DnT || !ask) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const query = new Query({ name, email, DnT, ask });

    const createdQuery = await query.save();

    res.status(201).json(createdQuery);
  }
});
module.exports = { CreateQuery };
