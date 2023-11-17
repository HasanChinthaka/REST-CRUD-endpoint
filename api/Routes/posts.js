const express = require('express');
const router = express.Router();

router.get('/get-posts',(req, res, next)=>{
    res.send("<h1 style='color:orange;'>Posts were fetched</h1>");
    res.status(200).json({
        message: 'Posts were fetched'
    });
    
});
router.post('/post-posts',(req, res, next)=>{
    res.send("<h1 style='color:skyblue;'>Posts were fetched</h1>");
    res.status(200).json({
        message: 'Post was created'
    });
});
router.put('/put-posts',(req, res, next)=>{
    res.send("<h1 style='color:green;'>Post was updated</h1>");
    res.status(200).json({
        message: 'Post was updated'
    });
});
router.patch('/patch-posts',(req, res, next)=>{
    res.send("<h1 style='color:lightgreen;'>Post name was updated</h1>");
    res.status(200).json({
        message: 'Post name was updated'
    });
});
router.delete('/delete-posts',(req, res, next)=>{
    res.send("<h1 style='color:red;'>Posts were deleted</h1>");
    res.status(200).json({
        message: 'Post was deleted'
    });
});

module.exports = router;