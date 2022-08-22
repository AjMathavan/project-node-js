const express = require('express')
const router = express.Router()
const Data = require('../model/employee')



//get method dude
router.get('/', (req,res) => {
           Data.find().then((data)=>{
              res.json(data)
          })
          .catch((err) => {res.json(err)})
})


//get a particular id 
router.get('/:employeeid', async(req,res) => {
  const emp = req.params.employeeid
  const a = await Data.find({'employeeid':emp})
  res.json(a)
        })


//router.get('/:id/:employeeid', async(req,res) => {
  //  try{
    //       const data = await Data.find(req.params.employeeid)
      //     res.json(data)
    //}catch(err){
      //  res.send('Error ' + err)
   // }
//})

//post method dude 
router.post('/', async(req,res) => {
        if(req.body.email && req.body.email.includes('@')){
            console.log(req.body.phoneNo.length,req.body)
            if(req.body.phoneNo && String(req.body.phoneNo).length === 10){
                Data.countDocuments().then(count => {
                    console.log(count)
                    Data.create({...req.body,employeeid:count+1})
                    .then((data)=>{
                        res.json(data)
                    })
                })
                .catch((err) => {res.json(err)})
            }
            else{
                res.json({msg:"Invalid Phone Number"})
            }
        }
        else{
            res.json({msg:"Invalid email address"})
        }
   
})


// updata method dude 
router.patch('/:employeeid',async(req,res)=> {
    Data.findOneAndUpdate({employeeid:req.params.employeeid},req.body)
    .then((data)=>{
        res.json(req.body);
    }) 
    .catch((err) => {res.json(err)})
})


// delete method dude 
router.delete('/:employeeid',async(req,res)=> {
    try{
        Data.deleteOne({employeeid:req.params.employeeid}).then((data)=>{
            res.json('deleted successfully..')   
    })  
    }catch(err){
        res.send('Error')
    }
})

module.exports = router
