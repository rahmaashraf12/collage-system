import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/coll-system");
const db = mongoose.connection;
db.on('error', err => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('MongoDB connected!');
});



export default db;


