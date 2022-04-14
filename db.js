const mongoose = require('mongoose')
const {
  MONGODB_HOST,
  MONGODB_PORT,
  MONGODB_NAME,
  MONGODB_USER,
  MONGODB_PASS
} = process.env

const options = {
  useNewUrlParser: true,
  // reconnectTries: Number.MAX_VALUE,
  // reconnectInterval: 500,
  connectTimeoutMS: 10000,
}

const url = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`
console.log(url);
mongoose.connect(url, options).then(() => {
  console.log("Mongodb connected");
}).catch((err) => {
  console.log("Mongodb connect error", err);
})