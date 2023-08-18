const { errorLogger } = require("../utils");
const api = require("../api");

class PostsController {
  async getPost(req, res) {
    try {
      const { channelId, postId } = req.params;
      const result = await api.call("messages.Messages", {
        channel: channelId,
        id: postId,
      });
      return result;
    } catch (error) {
      errorLogger(error);
    }
  }
}

module.exports = new PostsController();
