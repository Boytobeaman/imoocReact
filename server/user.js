const express = require('express');
const Router = express.Router();
const model = require('./model');
const utils = require('utility');
const _filter = {'pwd': 0,'__v': 0};

const User = model.getModel('user');
Router.get('/list',function (req, res) {
    // User.remove({},function (e,d) {});
    User.find({},function (err, doc) {
        return res.json(doc)
    })
});
Router.post('/login', function (req, res) {
    const {user, pwd } = req.body;
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function (err, doc) {
        if(!doc){
            return res.json({code:1,msg:'user and pwd does not exit or match!'})
        }
        res.cookie('userid',doc._id);
        return res.json({code:0,data:doc})
    })
})
Router.post('/register', function (req, res) {
    console.log(req.body);
    const {user, pwd, type} = req.body;
    User.findOne({user},function (err, doc) {
        if(doc){
            return res.json({code:1,msg:'duplicate user name'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)});
        userModel.save(function (e, d) {
            if(e){
                return res.json({code: 1,msg: "back end error"})
            }
            const { user, type, _id} = d;
            return res.json({code: 0,data:{user, type, _id}})
        })
        User.create({user, pwd: md5Pwd(pwd), type},function (err, doc) {
            if(err){
                return res.json({code:1,msg:'back end error'})
            }
            return res.json({code:0})
        })
    })
})
Router.get('/info', function (req, res) {
    console.log(req);
    const {userid} = req.cookies;
    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,function (err, doc) {
        if(err){
            return res.json({code:1, msg: 'backend error'})
        }
        if(doc){
            return res.json({code:0,data: doc})
        }
    })
});

function md5Pwd(pwd) {
    const salt = 'imooc_salt@';
    return utils.md5(utils.md5(pwd+salt));
}

module.exports = Router;