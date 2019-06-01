const router = require('express').Router();

const Actions = require('./projects-model')

router.get('/', async(req, res)=>{
  try{
    const projects = await Projects.find();
    res.status(200).json(projects);

  } catch (error){
    res.
      status(500)
      .json({message: 'Error getting PROJECTS'})

  }
})
//POST for adding projects
router.post('/', async (req,res)=>{
  const projects = req.body;
  if(projects.name){
    try {
      const inserted = await Projects.add(projects);
      res.status(201).json(inserted);
    } catch (error) {
      res.status(500).json({message:'Adding project ERROR!!'})
    }
  } else {
    res.status(400).json({message:'Provide Name For Project'})
  }
})
//POST for adding actions






// GET for retrieving a project by its id that returns an object with the following structure: