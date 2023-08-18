const { errorLogger } = require("../utils");
const api = require("../api");

class PostsController {
  async getPost(req, res) {
    try {
      const { channelId, postId } = req.params;
      const result = await api.call(
        "channels.getMessages",
        {
          channel: {
            _: "inputChannel",
            channel_id: channelId,
          },
          id: [
            {
              _: "inputMessageID",
              id: postId,
            },
          ],
        },
        { syncAuth: false }
      );
      res.json(result);
      return result;
    } catch (error) {
      res.json(error);
      errorLogger(error);
    }
  }
}

module.exports = new PostsController();
