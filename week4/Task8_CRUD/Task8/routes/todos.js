const express  = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} =  require("../controllers/deleteTodo");

router.post("/Todo", createTodo);
router.get("/Todos", getTodo);
router.get("/Todo/:id", getTodoById);
router.put("/Todo/:id", updateTodo);
router.delete("/Todo/:id", deleteTodo);

module.exports = router;