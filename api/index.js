const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/loader", async (req, res) => {
    try {
        res.send(
            { 
                lol: "45 Powerful", 
                God: "I love you",
                name:"Tesse 7867",
                surname:"Brunel",
                code:"OPEX 45 90 df",
                local:true,
                server:"Running poi"
            }
        );
    } catch (error) {
        res.sendStatus(504);
    }
});

app.listen(4000, () => {
    console.log("Listening for requests on port 4000..");
});
