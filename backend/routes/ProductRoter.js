const ensureAuthonticated = require('../middleware/Auth')
const router = require('express').Router();


router.get('/' , ensureAuthonticated , (req,res)=>{
    console.log('----------logged in user detail---' , req.user);
    
    res.status(200).json([
        {
            name:"mobile",
            price:'1200'
        },
        {
            name:"tv",
            price:'1000'
        }
    ])
})

module.exports = router