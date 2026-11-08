const express=require('express');
const router=express.Router();

// Fixed data for now; in later lessons it will come from MySQL
const groups=[
  {id:1, title:'Trees & heaps from scratch', courseId:1, organizer:'Lina Haddad', date:'2026-11-08', startTime:'18:00', endTime:'20:00', meetingType:'On campus', location:'Building B, room 204', level:'Getting started', maxMembers:6, membersCount:5},
  {id:2, title:'Use cases & UML diagrams', courseId:2, organizer:'Daniel Mizrahi', date:'2026-11-09', startTime:'20:00', endTime:'21:30', meetingType:'Online', location:'Google Meet', level:'Reviewing', maxMembers:8, membersCount:2},
  {id:3, title:'React hooks – past exam questions', courseId:3, organizer:'Noa Levi', date:'2026-11-10', startTime:'19:00', endTime:'21:00', meetingType:'Online', location:'Zoom', level:'Exam practice', maxMembers:6, membersCount:4},
  {id:4, title:'CSS Flexbox & Grid workshop', courseId:3, organizer:'Adam Nasser', date:'2026-11-11', startTime:'16:00', endTime:'18:00', meetingType:'On campus', location:'Building A, lab 3', level:'Getting started', maxMembers:8, membersCount:3},
  {id:5, title:"Nielsen's heuristics – practice", courseId:4, organizer:'Shira Katz', date:'2026-11-11', startTime:'18:00', endTime:'19:30', meetingType:'Online', location:'Zoom', level:'Exam practice', maxMembers:6, membersCount:6},
  {id:6, title:'SQL joins & subqueries', courseId:5, organizer:'Omer Ben-David', date:'2026-11-12', startTime:'17:30', endTime:'19:30', meetingType:'On campus', location:'Library, group room 2', level:'Reviewing', maxMembers:5, membersCount:3}
];

// GET /api/groups – all study groups
router.get('/',(req,res)=>{
  res.json(groups);
});

// GET /api/groups/open – study groups that still have free spots
router.get('/open',(req,res)=>{
  const openGroups=groups.filter(g=>g.membersCount<g.maxMembers);
  res.json(openGroups);
});

module.exports=router;
