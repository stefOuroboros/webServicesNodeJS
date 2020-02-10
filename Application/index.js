const express   = require('express');
const fs        = require('fs');
const app       = express();

    for (let controllerName of fs.readdirSync(__dirname + '/Controller')) {
        let controller = require(__dirname + '/Controller/' + controllerName);
        
        for(let method of Object.getOwnPropertyNames(controller)) {
            // ['lenght', 'prototype', 'index', 'name']
            if (typeof controller[method] == 'function') {
                // ['index']
                console.log(controller[method]());
                for(let url of controller[method]()) {
                    app.all(url, controller[method]);
                }
            }
        }
    }

    for (let modelName of fs.readdirSync(__dirname + '/Model')) {
        let model = require(__dirname + '/Model/' + modelName);
        if (model.apify) {
            app.get('/api/'     + model.name, (req, res) => {res.json({ method: 'get'   , model: model.name}) });
            app.post('/api/'    + model.name, (req, res) => {res.json({ method: 'post'  , model: model.name}) });
            app.put('/api/'     + model.name, (req, res) => {res.json({ method: 'put'   , model: model.name}) });
            app.patch('/api/'   + model.name, (req, res) => {res.json({ method: 'patch' , model: model.name}) });
            app.delete('/api/'  + model.name, (req, res) => {res.json({ method: 'delete', model: model.name}) });
        }
    }

    app.use(express.static('../Public/'));
    app.listen(1337, () => {
        console.log('http://127.0.0.1:1337');
    });

