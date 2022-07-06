const Gif = require("../models/gif");

const getGif = async (req, res, next) => {
    try {
      const gif = await Gif.findById({
          _id:req.params.GifId
        }).lean()
        .exec();
      res.status(200).send({
        data: gif,
      })
  
    } catch (error) {
      next(error);
    }
  };
  const getAll = async (req, res, next) => {
    try {
      const gif = await Gif.find({}).lean()
        .exec();
      res.status(200).send({
        data: gif,
      })
  
    } catch (error) {
      next(error);
    }
  };
  const createGif = async (req, res, next) => {
    try {
      await Gif.create({
        name: req.body.name,
        url: req.body.url,
        category:req.body.category
      });
      res.status(200).send({
        data:"ok",
      });
    } catch (error) {
      next(error);
    }
  
  };
  const getByCategory = async (req, res, next) => {
    try {
      const gif = await Gif.find({category:req.body.category}).lean()
        .exec();
      res.status(200).send({
        data: gif,
      })
  
    } catch (error) {
      next(error);
    }
  };
  const getByName = async (req, res, next) => {
    try {
      const gif = await Gif.find({name:req.body.name}).lean()
        .exec();
      res.status(200).send({
        data: gif,
      })
  
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    getGif,
    createGif,
    getAll,
    getByCategory,
    getByName
  };