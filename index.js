const server = require('./api/server.js');

const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
