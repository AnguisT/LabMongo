var db = require('../db/mongodb');
var mongoose = require('mongoose');

var address = db.address;
var library = db.library;
var shelvings = db.shelvings;
var book = db.book;

function getBooks() {
    return book.find();
}

function getOneBook(idlib) {
    return book.findOne({id: idlib});
}

function findShelvings(genrebook) {
    return shelvings.findOne({genre: genrebook})
}

function findLibrary(titlelibrary) {
    return library.findOne({title: titlelibrary})
}

function addBook(data) {
    // shelvings = new db.shelvings({
    //     genre: data.genrebook,
    //     library: findLibrary(data.titlelibrary)
    // });
    var newBook = new db.book({
        title: data.titlebook,
        author: data.authorbook,
        numberPages: data.numberpages,
        circulations: data.circulation,
        dateWriting: data.datewrit
    });
    console.log(newBook);
    newBook.save();
    return getBooks();
}

module.exports = {
    getbooks: getBooks,
    getonebook: getOneBook,
    addbook: addBook
};