const path = require("path");
const MTProto = require("@mtproto/core");
const { errorLogger } = require("./utils");
const config = require("dotenv").config();

const apiId = process.env.API_ID;
const apiHash = process.env.API_HASH;

if (apiId && apiHash) {
  const mtproto = new MTProto({
    api_id: apiId,
    api_hash: apiHash,
    storageOptions: {
      path: path.resolve(__dirname, "./data/1.json"),
    },
  });

  module.exports = mtproto;
} else {
  errorLogger(
    "Telegram API Id or Telegram API Hash was not specified in .env file. Check it and try again."
  );
}
