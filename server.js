var express = require('express');
var time = require('./Time/time');
var api = require('./API/library');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/'));
app.use('/api', router);
var urlencodedParser = bodyParser.urlencoded({extended: false});
// app.use(bodyParser.json());
// app.use('/v1/addbook', bodyParser.urlencoded({
//     extended: true
// }));

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started!')
});

router.get('/time', function (req, res) {
    res.json({
        timeNow: time.ntime()
    });
});

router.get('/v1/book', function(req, res) {
    api.getbooks().then(function (data){
        res.json(data);
    });
});

router.get('/v1/book/:id', function (req, res) {
    api.getonebook(req.params.id).then(function (data) {
        res.json(data);
    })
});

router.post('/v1/book', urlencodedParser, function (req, res) {
    var book = req.body;
    api.addbook(book).then(function (data) {
        res.json(data);
    });
});

router.delete('/v1/');

// // Получение конкретного элемента
// router.get('/addres/:city', function(req, res, next) {
//     api.findOne(req.params.city).then(function(document){
//         res.json(document);
//     })
// });
//
// // Удаление конкретного элемента
// router.delete('/addres/delete/:city', function(req, res, next) {
//     api.removeOne(req.params.city).then(function(document){
//         res.json(document);
//     })
// });
//
// // Создание нового элемента
// router.post('/addres/add', function(req, res, next) {
//     var addres = JSON.parse(request.body);
//     api.add(addres).then(function(document){
//         res.json(document);
//     })
// });
//
// // Получение списка элементов
// router.get('/addres', function(req, res, next) {
//     api.find(req.body).then(function(document){
//         res.json(document);
//     })
// });