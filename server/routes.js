import express from "express"
import { getUser, createUser } from './userFunctions.js'

module.exports = () => {
  const router = express.Router();

  router.post("/create", createUser);

  router.get("/user/:id", getUser);

  return router;
}