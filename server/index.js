const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const massive = require('massive');
const app = express();
app.use(express.json());

const {SERVER_PORT,CONNECTION_STRING} = process.env;
//house controller
const {getHouses,addHouse,deleteHouse} = require('./controller');

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db);
    console.log('Db connected')
}).catch(err=>console.log('Something happened in connection to Db'))

//endpoints
app.get('/api/houses',getHouses);
app.post('/api/house',addHouse);
app.delete('/api/house/:id',deleteHouse);





app.listen(SERVER_PORT,()=>console.log(`Server in on ${SERVER_PORT}`))