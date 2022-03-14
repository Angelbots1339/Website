import express from 'express'
import cors from "cors"
import Event from "./api/event.route.js"

const app = express()
const port = 8000


app.use(cors())
app.use(express.json({limit: '50mb'}));



app.use("/api/v1", Event)
app.use(function(err,req,res){
    res.status(422).send({error: err.message});
});
app.use("*", (req, res) => res.status(404).json({error: "not found"}))


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})