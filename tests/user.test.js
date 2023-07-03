const mongoose = require("mongoose");
const request = require("supertest");
const server = require("../server");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    // Set up default mongoose connection
    const mongoDB = process.env.MONGO_URL || null;
        mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:"dome_db",
    });
 
    // Get the default connection
    var db = await mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    mongoose.connection.close();
    server.close();
  });

  describe("GET /api/user/getAllUsers", () => {
    it("should return all users", async () => {
      const res = await request(server).get("/api/user/");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });