const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

const sessionsController = Router();
sessionsRoutes.post("/", sessionsController.create);

module.exports = routes;