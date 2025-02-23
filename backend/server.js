const express =require("express");
const pool = require("./database/pool");

const app = express();
const PORT= 9000;


app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});