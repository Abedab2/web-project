const express=require('express');
const app=express();

const groupRoutes=require('./routes/groups');
const courseRoutes=require('./routes/courses');

// Home page
app.get('/',(req,res)=>{
  res.json({
    message:'Welcome to the StudyWith API',
    routes:['/api/groups','/api/groups/open','/api/courses','/api/courses/popular']
  });
});

// Every request that starts with /api/groups or /api/courses is passed to its router
app.use('/api/groups',groupRoutes);
app.use('/api/courses',courseRoutes);

// Error: no route matched the request
app.use((req,res)=>{
  res.status(404).json({message:'Route not found'});
});

app.listen(3000,()=>{
  console.log('StudyWith server is running on http://localhost:3000');
});
