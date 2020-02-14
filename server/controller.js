getHouses = (req,res) =>{
    const db = req.app.get('db');
    db.getHouses().then((response)=>{
        res.status(200).json(response)
    })
}
addHouse = (req,res)=>{
    const db = req.app.get('db');
    const{name,address,city,state,zip,img,mortgage,rent} = req.body;
    let newHouse ={name,address,city,state,zip,img,mortgage,rent};
    db.addHouse(newHouse).then(()=>{
        res.sendStatus(200).json(newHouse);
    }).catch(()=>{
        res.status(500).json('can not add house')
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