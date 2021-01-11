const Item = require('./../models/items');

exports.home =  function(req, res){
    res.redirect('/get-items');
}

exports.getitems = function(req, res){
    Item.find().
    then(result =>{res.render('home',{items:result})}).
    catch(err =>{console.log(err)});
}

exports.additems = function(req, res){
    res.render('add-item');
}

exports.createitems = async function(req, res){
    // await console.log(req.body);
    const item =  new Item(req.body);
    item.save().then(()=>{
        res.redirect('/get-items');
    }).catch((err)=>{console.log(err)})
}

exports.getitembyid = function(req, res){
    // console.log(req.params);
    const id = req.params.id;
    Item.findById(id).then((result)=>{
        console.log('result', result);
        res.render('item-details',{item : result})
    }).catch((err)=>{console.log(err)})
    
}

exports.deleteitembyid = function(req, res){
    // console.log(req.params);
    const id = req.params.id;
    Item.findByIdAndDelete(id).then((result)=>{
        res.json({redirect:"/get-items"})
    }).catch((err)=>{console.log(err)}) 
}


exports.updateitembyid = function(req, res){
    // console.log(req.params);
    const id = req.params.id;
    Item.findByIdAndUpdate(id ,req.body).then(()=>{
        res.json({msg:"updated successfully"}).catch(err=>{
            console.log(err)
        })
    })
}



exports.error = function(req, res){
    res.render('error');
}