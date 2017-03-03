let Project = require('../models/Project');
let student = require('../models/student');
let projectController = {

    getAllProjects:function(req, res){

        Project.find(function(err, projects){

            if(err)
                res.send(err.message);
            else
                res.render('index', {projects});
        })
    },

    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.redirect('/');
            }
        })
    },
    signIn:function(req, res){
      student.find({username:req.body.username, password:req.body.pass},function(err,student){
        if(err){
          console.log(err.message);
        }
        else{
          if(student){
            if(req.body.pass)
            {
              var validpass = user.comparePassword(req.body.pass);
            }
            else {
              console.log(err.message);
            }
            if(validpass)
            {
              res.render('home' + username);
            }

          }else{
            console.log(err.message);
          }
        }
      })
    },
    loggedIn:function(req, res){
      if(err)
          res.send(err.message);
      else
          res.render('home');
},
     signUp:function(req, res)
     {
       if(err)
         res.send(err.message);
     }
     else
       {
        res.render('register'); 
       }

}
module.exports = projectController;
