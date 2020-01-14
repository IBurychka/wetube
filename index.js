// const express = require('express');
import express from 'express';
const app = express();

const PORT = process.env.PORT || 4000

const handledListener = () => {
  console.log(`Server listen on port ${PORT}`)
};

const handleHome = (req, res, next) => {
  res.send(`Hello world!`);
};

const betweenHome = (req, res, next) => {
  console.log('Between Home');
  next();
};

const handleProfile = (req, res, next) => {
  res.send(`Profile page`);
};

app.use(betweenHome)

app.get('/', betweenHome, handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handledListener);
