'use strict'

var Project = require('../models/project');

var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: "Home"
        });
    },

    test: function(req, res) {
        return res.status(200).send({
            massage: "test prro"
        });
    },

    saveProject: function(req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.lang = params.lang;
        project.year = params.year;
        project.image = null;

        project.save((error, projectStored) => {
            if(error) {
                return res.status(500).send({
                    message: "Error al guardar"
                });
            }

            if(!projectStored) {
                return res.status(404).send({
                    message: "No se ha podido guardar el proyecto"
                });
            }

            return res.status(200).send({
                project: projectStored
            });
        });   
    },

    getProject: function(req, res) {
        var projectId = req.params.id;

        Project.findById(projectId, (err, project) =>{
            if(err) {
                return res.status(500).send({
                    message: "Erro al devolver los datos"
                });
            }

            if(!project) {
                return res.status(404).send({
                    message: "No se encontro ningun proyecto con el ID " + projectId
                });
            }

            return res.status(200).send({
                project: project
            });
        });
    },

    getProjects: function(req, res) {
        Project.find({}).exec((err, projects) => {
            if(err) {
                return res.status(500).send({
                    message: "Erro al devolver los datos"
                });
            }
            
            if(!projects) {
                return res.status(404).send({
                    message: "No hay proyectos para mostrar"
                });
            }

            return res.status(200).send({
                projects
            });
        });
    },

    updateProject: function(req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
            if(err) {
                return res.status(500).send({
                    message: "Erro al asctualizar los datos"
                });
            }
            
            if(!projectUpdated) {
                return res.status(404).send({
                    message: "No existe ese projecto"
                });
            }

            return res.status(200).send({
                project: projectUpdated
            });
        });
    },

    deleteProject: function(req, res) {
        var projectId = req.params.id;

        Project.findByIdAndDelete(projectId, (err, projectDeleted) => {
            if(err) {
                return res.status(500).send({
                    message: "Erro al eliminar los datos"
                });
            }
            
            if(!projectDeleted) {
                return res.status(404).send({
                    message: "No existe ese projecto"
                });
            }

            return res.status(200).send({
                project: projectDeleted
            });
        });
    },

    uploadImage: function(req, res) {
        var projectId = req.params.id;
        var fileName = 'Sin imagen';
        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[2];

            Project.findByIdAndUpdate(projectId, {image: fileName}, {new:true}, (err, projectUpdated) =>{
                if(err) {
                    return res.status(500).send({
                        message: "La imagen no se ha subido"
                    });
                }
                
                if(!projectUpdated) {
                    return res.status(404).send({
                        message: "No existe ese projecto"
                    });
                }
    
                return res.status(200).send({
                    project: projectUpdated
                });

            })

        }
        else{
            return res.status(500).send({
                files: "undefined"
            });
        }

    }
};  

module.exports = controller;