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
        project.langs = params.langs;
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
    }
};  

module.exports = controller;