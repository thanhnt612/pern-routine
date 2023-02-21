import express from "express"
import cors from "cors"
import task from "./routes/taskRoute.js"

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/task', task);

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})