const express = require('express')
const { MongoClient} = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors')
const app = express()
const port = 5000

//middle ware
app.use(cors())
app.use(express.json())
//cygnus
//star99MOON


const uri = "mongodb+srv://cygnus:star99MOON@cluster0.ifcdflc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,});

async function run(){
    try{
        await client.connect();
        const database = client.db("cygnus");
        const serviceCollection = database.collection("services");
        console.log('database connected')

        // send services to the database
        app.post('/services', async (req, res) => {
            const service = req.body;
            const result = await serviceCollection.insertOne(service);
            // console.log(result);
            res.json(result)
        });

        // update data into order collection
        app.put('/services/:id([0-9a-fA-F]{24})', async (req, res) => {
            const id = req.params.id.trim();
            console.log('updating', id)
            const updatedService = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: updatedService.name,
                    price: updatedService.price,
                    duration: updatedService.duration,
                    img: updatedService.img,
                    
                },
            };
            const result = await serviceCollection.updateOne(
                filter, 
                updateDoc, 
                options
            )
            console.log('updating', id)
            res.json(result)
        });





    } finally {

    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Travelling run on port ${port}`)
})