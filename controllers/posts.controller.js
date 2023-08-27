const { errorLogger } = require("../utils");
const api = require("../api");

class PostsController {
  async getPost(req, res) {
    try {
      const { channelId, postId } = req.params;

      const resolvedPeer = await api.call("contacts.resolveUsername", {
        username: channelId,
      });

      console.log(resolvedPeer);

      const channel = resolvedPeer.chats.find(
        (chat) => chat.id === resolvedPeer.peer.channel_id
      );

      console.log(channel);

      const message = await api.call(
        "channels.getMessages",
        {
          channel: {
            _: "inputChannel",
            channel_id: channel.id,
            access_hash: channel.access_hash,
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
      console.log(message);
      res.json(message);
      return message;
    } catch (error) {
      res.json(error);
      errorLogger(error);
    }
  }
}

module.exports = new PostsController();
