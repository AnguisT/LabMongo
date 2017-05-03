var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var uristring = 'mongodb://karolb:v1901236@ds145009.mlab.com:45009/lab3';
var connection = mongoose.createConnection(uristring);

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});

autoIncrement.initialize(connection);

var Schema = mongoose.Schema;

var addressSchema = new Schema({
    city: String,
    street: String,
    numberHome: Number
});

var librarySchema = new Schema({
    id: Number,
    title: String,
    addres: addressSchema,
    openingLibrary: Date.parse("hh:mm:ss"),
    closignLibrary: Date.parse("hh:mm:ss")
});

var shelvingsSchema = new Schema({
    id: Number,
    genre: String,
    library: librarySchema
});

var bookSchema = new Schema({
    id: Number,
    title: String,
    author: String,
    numberPages: Number,
    circulations: Number,
    dateWriting: Date.parse("dd.MM.yyyy"),
    shelvings: shelvingsSchema
});

librarySchema.plugin(autoIncrement.plugin, {model: 'Library', field: 'id', startAt: 1, incrementBy: 1});
shelvingsSchema.plugin(autoIncrement.plugin, {model: 'Shelvings', field: 'id', startAt: 1, incrementBy: 1});
bookSchema.plugin(autoIncrement.plugin, {model: 'Book', field: 'id', startAt: 1, incrementBy: 1});

var Book = mongoose.model('Book', bookSchema);
var Shelvings = mongoose.model('Shelvings', shelvingsSchema);
var Library = mongoose.model('Library', librarySchema);
var Address = mongoose.model('Address', addressSchema);

// var newAddress = Address({city: "Москва", street: "ул. Большая Московская", numberHome: 15});
// var newLibrary = Library({title: "Городская библиотека", addres: newAddress, openingLibrary: "8:00:00", closignLibrary: "20:00:00"});
// var newShelvings = Shelvings({genre: "Фентези", library: newLibrary});
// var newBook = Book({title: 'Космический волк', author: 'Орлов В.В', numberPages: 200, circulations: 2000, dateWriting: '19.01.2010', shelvings: newShelvings});
//
// newAddress.save();
// newLibrary.save();
// newShelvings.save();
// newBook.save();

module.exports = {
    address: Address,
    library: Library,
    shelvings: Shelvings,
    book: Book
};