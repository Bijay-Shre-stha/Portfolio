import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import {renderGetContact,  postContact } from './controller/pageController.js';

const app = express();
const port = 3000;

const mongooseURL = 'mongodb://127.0.0.1:27017/contact';

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
    try {
        await mongoose.connect(mongooseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to the database', error.message);
    }
};

startServer();

app.get('/', renderGetContact);
app.post('/postContact',postContact);


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});