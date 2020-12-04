const knex = require("../../db/knex");
var generateSafeId = require("generate-safe-id");
const { select } = require("../../db/knex");

let likeController = {};



likeController.create = async (req, res) => {
    const { contentId} = req.body;
    knex
      .insert({
        contentId:contentId
      })
      .into("likelist")
      .then((result) => {
        res.end("likeCreated");
      });
  };
  likeController.delete = function (req, res) {
    const { contentId} = req.body;
    knex("likelist")
      .where("contentId", contentId)
      .del()
      .then(() => {
        res.end("A Project is deleted");
      });
  };

  likeController.read = function (req, res) {
  knex("likelist")
      
      .select("likelist.contentId")
      .then((likeList) => {
      res.json(likeList);
  });
};


module.exports = likeController;