import app from './app';

const PORT = process.env.PORT || 4000;

const handledListener = () => {
  console.log(`Server listen on port ${PORT}`)
};

app.listen(PORT, handledListener);
