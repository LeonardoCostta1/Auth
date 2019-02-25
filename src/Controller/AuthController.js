const mongoose = require('mongoose');
const auth = mongoose.model('Auth');
module.exports={
    async index(req,res){
        const authenticate = await auth.find();
        return res.json(authenticate);
    },
    async add(req,res){
        const authenticate = await auth.create(req.body);
        return res.json(authenticate)
    },
    async update(req,res){
        const authenticate = await auth.findByIdAndUpdate(req.params.id , req.body, {new:true});
        return res.json(authenticate);
    },
    async delete(req,res){
        const authenticate = await auth.findByIdAndRemove(req.params.id);
        return res.json({"Status":"Removido"})
    }

}