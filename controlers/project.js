const models = require("../models/products");

const productelement = async (req, res) => {
  const Products = await models.find(req.query).select();
  res.status(200).json({ Products });
};

const productelementtesting = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryobject = {};

  if (company) {
    queryobject.company = company;
  }
  if (name) {
    queryobject.name = { $regex: name, $options: "i" };
  }
  if (featured) {
    queryobject.featured = featured;
  }

  let apidata = models.find(queryobject);

  if (sort) {
    const sortfix = sort.split(",").join(" ");
    apidata = apidata.sort(sortfix);
  }

  if (select) {
    const selectfix = select.split(",").join(" ");
    apidata = apidata.select(selectfix);
  }

  let page = Number(req.query.page);
  let limit = Number(req.query.limit);

  let skip = (page - 1) * limit;
  apidata = apidata.skip(skip).limit(limit);
  try {
    const Products = await apidata;
    res.status(200).json({ Products });
  } catch (error) {
    res.status(500).json(`Error, No Data found..`);
  }
};
const productsale = async (req, res) => {
  res.send("Sale is working, Thank you");
};

module.exports = { productelement, productelementtesting, productsale };
