const express = require('express');
const app = express();

const PostRoutes = require('./api/Routes/posts');

app.use('/posts',PostRoutes);

module.exports = app;