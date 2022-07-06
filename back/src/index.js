const { server} = require("./server");
const { config } = require("./config/config")
const { connectDB } = require("./db/connect");

if (!config.port) {
    throw new Error("Invalid port");
}

connectDB().then(() => {
    console.log("DB Connected");
    
    server.listen(config.port, () => {
        console.log(`Server is running on ${`http://localhost:${config.port}`}`);
    });
});