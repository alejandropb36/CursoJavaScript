'use strict'

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
    }
};  

module.exports = controller;