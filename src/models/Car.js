import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    _id: String,
    name: String,

});

const Car = mongoose.model('cars', CarSchema);
export default Car;