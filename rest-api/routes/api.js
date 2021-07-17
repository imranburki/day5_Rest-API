// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
const controllers=require('../controllers')

const Player=require('../models/Player')
const Team=require('../models/Team')


router.get('/:resource',(req,res)=>{
  const resource=req.params.resource;
  const controller=controllers[resource]

  if(controller==null){
    res.json({
      confirmation:'Da Fail show',
      message:'Invalid Resource ha..'
    })
    return 
  }
  controller.get()
  .then(data=>{
    res.json({
      confirmation:'success ',
      data: data
    })
  })
  .catch(err=>{
    res.json({
      confirmation:'Failed...',
      message:err.message
    })
  })
})
/*  This is a sample API route. */

// const players=[
//   {firstName:"Shahid",lastName:"Afridi",position:"allrounder",age:39,team:"Multan Sultan"},
//   {firstName:"Muhammad",lastName:"Aamir",position:"fast bowler",age:30,team:"Karachi King"},
//   {firstName:"Shoaib",lastName:"Malik",position:"allrounder",age:40,team:"peshawer Zalmi"} ,
//   {firstName:"Sohail",lastName:"Khan",position:"kipper",age:33,team:"Islamabad United"}
// ]
// const teams=[
//   {name:"Multan Sultan",city:"Multan",sponser:"pepsi"},
//   {name:"Peshawer Zalmi",city:"Peshawer",sponser:"Haier"},
//   {name:"Karachi king",city:"Karachi",sponser:"TUC Biscuits"},
//   {name:"Lahor Qualandar",city:"Lahore",sponser:"Mobilink"}
// ]
// //combining teams and players into one object
// const db={
//   team:teams,
//   player:players
// }
// //query for teams
// router.get('/teams',(req,res)=>{
//   Team.find(null,)
//   .then(data=> {
//     res.json({
//       confirmation:'success sho',
//       data:data
//     })
//   })
//   .catch(err=>{
//     res.json({
//       confirmation:'Failed...',
//       message: err.message
//     })
//   })
// })

// //query for player
// router.get('/players',(req,res)=>{
//   Player.find(null,)
//   .then(data=> {
//     res.json({
//       confirmation:'success sho',
//       data:data
//     })
//   })
//   .catch(err=>{
//     res.json({
//       confirmation:'Failed...',
//       message: err.message
//     })
//   })
// })
//make a general request
// router.get('/:resource',(req,res)=>{
//   const resource=req.params.resource;
//   const data=db[resource];
//   if(data==null){
//     res.json({
//       confirmation:"Failed...",
//       data:"Invalid Request. Resource undefined..."
//     });
//     return
//   }

//   res.json({
//     confirmation:"Success",
//     data:data
//   });
//   if(resource=='teams'){
//     res.json({
//       confirmotion:"Success",
//       data:teams
//     });
//     return;
//   }

//   if(resource=='players'){
//     res.json({
//       confirmotion:"Success",
//       data:players
//     });
//     return;
//   }
  
// });


// router.get('/players',(req,res)=>{
//   res.json({
//     confirmation:'success',
//     data:players
//   });
// });

// router.get('/teams',(req,res)=>{
//   res.json({
//     confirmation:'success',
//     data:teams
//   });
// });
// router.get('/:resource', (req, res) => {
//   res.json({
//     confirmation: 'success',
//     resource: req.params.resource,
//     query: req.query // from the url query string
//   })
// })

// router.get('/:resource/:id', (req, res) => {
//   res.json({
//     confirmation: 'success',
//     resource: req.params.resource,
//     id: req.params.id,
//     query: req.query // from the url query string
//   })
// })

module.exports = router
