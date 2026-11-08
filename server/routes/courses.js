const express=require('express');
const router=express.Router();

// Fixed data for now; in later lessons it will come from MySQL
const courses=[
  {id:1, name:'Data Structures', year:1, popular:true},
  {id:2, name:'Systems Analysis & Design', year:2, popular:false},
  {id:3, name:'Web Programming (Client Side)', year:2, popular:true},
  {id:4, name:'Human-Computer Interaction', year:2, popular:false},
  {id:5, name:'Databases', year:2, popular:true}
];

// GET /api/courses – all courses
router.get('/',(req,res)=>{
  res.json(courses);
});

// GET /api/courses/popular – the most popular courses (shown on the Home page)
router.get('/popular',(req,res)=>{
  const popularCourses=courses.filter(c=>c.popular);
  res.json(popularCourses);
});

module.exports=router;
