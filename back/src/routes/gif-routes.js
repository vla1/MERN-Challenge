const { Router } = require("express");
const gifRouter = new Router();
const { gifController } = require("../controllers")

gifRouter.get("/getGif/:GifId", gifController.getGif);
gifRouter.get("/getAll", gifController.getAll);
gifRouter.post("/getByCategory", gifController.getByCategory);
gifRouter.post("/getByName", gifController.getByName);

gifRouter.post("/createGif", gifController.createGif);

module.exports = { gifRouter };
