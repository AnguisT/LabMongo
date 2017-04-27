var mongoose = require('mongoose');
var uristring = 'mongodb://karolb:v1901236@ds145009.mlab.com:45009/lab3';

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});

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
    openingLibrary: Date,
    closignLibrary: Date
});

var shelvingsSchema = new Schema({
    id: Number,
    numberShelvings: Number,
    genre: String,
    library: librarySchema
});

var bookSchema = new Schema({
    id: Number,
    title: String,
    author: String,
    numberPages: Number,
    circulations: Number,
    dateWriting: Date,
    shelvings: shelvingsSchema
});

var Book = mongoose.model('Book', bookSchema);
var Shelvings = mongoose.model('Shelvings', shelvingsSchema);
var Library = mongoose.model('Library', librarySchema);
var Address = mongoose.model('Address', addressSchema);

// module.exports = {
//     book: Book,
//     shelvings: Shelvings,
//     library: Library,
//     addres: Address
// };

module.exports = Address;