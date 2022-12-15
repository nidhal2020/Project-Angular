const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const foodRouter = require('./routers/food.router');
const userRouter = require('./routers/user.router');
const dbConnect = require('./configs/database.config');

dbConnect();

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    Credential:true,
    origin : ["http://localhost:4200"]
}));

app.use("/api/foods",foodRouter);
app.use("/api/users",userRouter)



const port = 5000

app.listen(port,()=>{
    console.log("web served on http://localhost:"+port)
})

