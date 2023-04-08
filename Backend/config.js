// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ecycle:<ecycle>@cluster0.uwe8xva.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   if (err) {
//     console.log('Error connecting to MongoDB Atlas:', err);
//     process.exit(1);
//   }
//   console.log('Connected to MongoDB Atlas');
//   const db = client.db('<database-name>');
// });

// module.exports = {
//   client,
//   db,
// };
module.exports = {
  mongodb: {
    uri: "mongodb+srv://ecycle:ecycle@cluster0.uwe8xva.mongodb.net/?retryWrites=true&w=majority",
  },
  port: 8080,
};
