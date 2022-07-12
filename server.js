const express = require("express");
const cors = require("cors"); 
const port = process.env.PORT || 8000; 
const app = express(); 
app.use(cors());       

const userRouter = require("./routers/index"); 
app.use("/api/v1", userRouter); 

app.listen(port, () => {
  console.log("Application has started successfully!!!. Hurrah!!"); 
});