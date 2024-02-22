import express from "express"
import connectToDb from "./database/db.js";
import auth from "./Routes/auth.js";
const app = express();
const port = 4000;

connectToDb();
app.use(express.json())
app.use('/api/signup/', auth );

app.listen(port , () => {
    console.log(`this is running on locahost:${port}`)
});