const express = require("express");
const router = express.Router();

const dals = require("../dals/apiDal");
router.get("/", (req, res) => {
  res.send("ASd");
});

//res.body =  {city : (str: city)}
router.post("/get-city-weather", async (req, res) => {
  try {
    const data = await dals.getDataWeather(req.body.city);
    res.json(data);
  } catch (err) {
    console.error("data weather not recive", err);
  }
});


//req.body = {city : (str: city)}
router.post("/get-options-autocomplite",async  (req, res) => {
  try {
     const dataAutoComplite = await dals.getAutoComplite(req.body.text);
    res.json(dataAutoComplite);
  } catch (err) {
    console.error("data auto complete not recive", err);
  }
});

module.exports = router;
