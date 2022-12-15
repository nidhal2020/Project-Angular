const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb+srv://Nidhal:I0lkVYFaGiZqDVq7@cluster0.o06xl.mongodb.net/foodmmm?retryWrites=true&w=majority'

module.exports = dbConnect = ()=>{ 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
   .then(() => console.log("db is connected"))
   .catch((err) => console.log(err));}
