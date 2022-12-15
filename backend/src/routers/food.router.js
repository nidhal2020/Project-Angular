const Router = require('express');
const data = require('../data');
const asyncHandler = require('express-async-handler');
const model = require('../models/food.model');



const router = Router();

router.get("/seed",asyncHandler(
    async (req,res)=>{
        const foodCount = await model.countDocuments();
        if(foodCount>0){
            res.send("seed is already done !")
            return;
        }
        
        await model.create(data.sample_foods);
        res.send("seed is done! ");
    }
))


router.get("/",asyncHandler(
    async(req,res)=>{

        const foods = await model.find()
        res.send(foods);
    }
))

router.get("/search/:searchTerm",asyncHandler(
    async(req,res)=>{
        const searchRegex = new RegExp(req.params.searchTerm,'i')
        const foods = await model.find({name:{$regex:searchRegex}})
        res.send(foods)
    }

))

router.get("/tags",asyncHandler(
    async(req,res)=>{
        const tags = await model.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group:{
                    _id:'$tags',
                    count: {$sum: 1}
                }
            },{
                $project:{
                    _id:0,
                    name:'$_id',
                    count:'$count'
                }
            }
        ]).sort({count: -1})

        const all = {
            name: 'All',
            count: await model.countDocuments()
        }
        tags.unshift(all);
        res.send(tags);
    }
))

router.get("/tag/:tagName",asyncHandler(
    async(req,res)=>{
        const foods = await model.find({tags: req.params.tagName})
        res.send(foods)
    }
))

router.get("/:foodId",asyncHandler(
    async(req,res)=>{
        const food = await model.findById(req.params.foodId)
        res.send(food)
    })
)

module.exports = router;