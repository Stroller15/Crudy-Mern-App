import express from "express";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = 4000;

const usernmae = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connectDB(usernmae, password);

// middleware
app.use('/', Routes);
app.use("", cors);

// Enable CORS middleware
app.use((req, res, next) => {
  // Set allowed origins (you can set specific origins or use "" for all origins)
  res.setHeader('Access-Control-Allow-Origin', '');
  // Set allowed headers (you can set specific headers or use "" for all headers)
  res.setHeader('Access-Control-Allow-Headers', '');
  // Set allowed HTTP methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});



app.get("/", (req, res) => {
    
          res.status(200).json({ message: 'User signed up successfully' });
    
    // res.redirect("/")
})

// Listening port
app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});