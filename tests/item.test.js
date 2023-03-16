const mongoose = require("mongoose");
const request = require("supertest");
const server = require("../server");
const ObjectId = require('mongodb').ObjectId;

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    // Set up default mongoose connection
    const mongoDB = process.env.MONGO_URL || null;
        await mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:"dome_db",
    });
 
    // Get the default connection
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    mongoose.connection.close();
    server.close();
  });

  describe("POST /api/item/getItemsByInventory", () => {
    it("should return all items in an inventory", async () => {
      const res = await request(server).post("/api/item/inventory").send(
        [ObjectId("63dce57e4026e71c9c76cb80"), 
        ObjectId("63dce6024026e71c9c76cb83")]
     );;
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("POST /api/item/getItemByLootTable", () => {
    it("should return all items with a given lootTable", async () => {
      const res = await request(server).post("/api/item/lootTable").send({
        data: {
          skill: "Fishing",
          rarity: ["common", "uncommon", "rare", "epic", "legendary", "mythic"]
        }}
     );;
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });