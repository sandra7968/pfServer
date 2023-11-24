const projects = require('../Models/projectSchema')

// .add project
exports.addProjects =  async (req,res)=>{
    console.log("Inside add project function");
    const userId = req.payload
    const projectImage = req.file.filename
    const {title,languages,overview,github,website} = req.body
    // console.log(title,languages,overview,github,website,projectImage,userId);
    try{
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json('Project already exist! Upload another')
        }else{
            const newProject = new projects({
                title,languages,overview,github,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
        res.status(401).json(`Request failed, Error:${err}`)
    }}