const Router = require("express");
const router = new Router();
const postsController = require("../controllers/posts.controller");

router.get("/:channelId/:postId", postsController.getPost);

module.exports = router;
