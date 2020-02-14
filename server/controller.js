getHouses = (req,res) =>{
    const db = req.app.get('db');
    db.getHouses().then((response)=>{
        res.status(200).json(response)
    })
}
addHouse = (req,res)=>{
    const db = req.app.get('db');
    const{name,address,city,state,zip} = req.body;
    db.addHouse(name,address,city,state,zip).then(()=>{
        res.sendStatus(200);        
    })
}
deleteHouse = (req,res)=>{
    const db = req.app.get('db');
    const id = req.params.id;
    db.deleteHouse(id).then(()=>{
        res.sendStatus(200);
    })

}
module.exports={
    getHouses,
    addHouse,
    deleteHouse
}