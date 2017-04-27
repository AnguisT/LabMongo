var express = require('express');
var time = require('./Time/time');
var api = require('./API/library');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started!')
});

router.get('/time', function (req, res) {
    res.json({
        timeNow: time.ntime()
    });
});

// Получение конкретного элемента
router.get('/addres/:city', function(req, res, next) {
    api.findOne(req.params.city).then(function(document){
        res.json(document);
    })
});

// Удаление конкретного элемента
router.delete('/addres/delete/:city', function(req, res, next) {
    api.removeOne(req.params.city).then(function(document){
        res.json(document);
    })
});

// Создание нового элемента
router.post('/addres/add', function(req, res, next) {
    var addres = JSON.parse(request.body);
    api.add(addres).then(function(document){
        res.json(document);
    })
});

// Получение списка элементов
router.get('/addres', function(req, res, next) {
    api.find(req.body).then(function(document){
        res.json(document);
    })
});

app.use('/api', router);