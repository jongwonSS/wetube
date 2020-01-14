import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);;

const between = (req, res, next) => {
    console.log(`I'm between`);
    next();
}

const handleHome = (req, res) => {
    res.send("Hello hi");
};

app.use(between);

app.get("/", handleHome);

app.listen(PORT, handleListening);