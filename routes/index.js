const router = require("express").Router();
const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { NOT_FOUND } = require("../utils/errors");

// Mount routing
router.use("/users", userRouter);
router.use("/items", itemRouter);

// Handle cases when the client requests a non-existent resource
router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
