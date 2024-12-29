const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB Connected....');
})
.catch((err) => {
    console.error('MongoDB Connection Error:', err);
});