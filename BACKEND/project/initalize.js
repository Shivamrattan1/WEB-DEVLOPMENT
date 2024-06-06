import sampleListing from "./data (1).js";
import mongoose  from "mongoose";
import Listing from "./models/listing.js";
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
  }
main();
const initDb = async ()=>{
    await Listing.deleteMany({});
    await   Listing.insertMany(sampleListing);
}
initDb();