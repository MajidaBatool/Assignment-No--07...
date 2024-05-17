
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'



const app = express()



dotenv.config();
const PORT= process.env.PORT || 3000

// app.use(express.json()); // Middleware to parse JSON requests

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

   
  ////get_request///
  app.get('/', (req, res)=>{
    res.send('This is response from backend')
  })

      app.get('/allStudents' , (req,res) =>{
        res.send('Getting All Students')
      })

        
 ////////---Add Student request----//////
 app.post('/addStudent' , (req,res) =>{
  res.send('Add Students')
})

            
 ////////---Update Students request----//////
 app.post('/updateStudent' , (req,res) =>{
  res.send('Update Students')
})

        
 ////////---Delete Student request----//////
 app.post('/deleteStudent' , (req,res) =>{
  res.send('Delete Student');
}) 





const Schema = mongoose.Schema;
const sampleSchema = new Schema({
  name: String,
  age: Number
});
const SampleModel = mongoose.model('Person', sampleSchema);


///////////////==get request==//////////////////////////

app.get('/', (req, res) => {
  res.send('Class 11 for backend')
})


app.get('/user' , (req,res)=>{
  res.send('user')
})


app.get('/post' , (req,res)=>{
  res.send('post')
})

////////////===post request===///////////
app.post('/', (req, res) => {
  res.send(' post root route')
})


app.post('/user' , (req,res)=>{
  res.send('post user')
})``


app.post('/post' , (req,res)=>{
  res.send('post user post')
})

app.post('/myuser',  async (req, res) => {

  try {
    const { myname, myage } = req.body;
    const sample = new SampleModel({ name: myname, age: myage });
    console.log(sample)
    await sample.save();
    res.status(201).json(sample);
  } catch (error) {
    console.log('Error creating sample:', error);
    res.status(500).json({ error: 'Server error' });
  }
});










app.listen(PORT, ()=>{
  console.log(`Example app listening on port ${PORT}`)
})








































