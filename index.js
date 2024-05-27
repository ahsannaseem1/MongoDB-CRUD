// // index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const productRoutes = require('./routes/productroutes');

// const app = express();
// const PORT = 3000;
// const mongoURI = 'mongodb+srv://products:Products@cluster0.c0zhtsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


// // Connect to MongoDB
//   mongoose.connect(mongoURI).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });


// app.use(bodyParser.json());
// app.use('/api', productRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });


// index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const productRoutes = require('./routes/productroutes');
// const userRoutes = require('./routes/userroutes');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;
// const mongoURI = 'mongodb+srv://products:Products@cluster0.c0zhtsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// mongoose.connect(mongoURI).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api', productRoutes);
// app.use('/api', userRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });


// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productroutes');
const userRoutes = require('./routes/userroutes');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
const mongoURI = 'mongodb+srv://products:Products@cluster0.c0zhtsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', productRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
