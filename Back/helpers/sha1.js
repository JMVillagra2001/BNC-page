const crypto = require('crypto');

const createSha1 = (data) => {
    return crypto.createHash("sha1").update(data, "binary").digest("hex");
}

module.exports = { createSha1 };