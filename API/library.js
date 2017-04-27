var Address = require('../db/mongodb');
var mongoose = require('mongoose');

exports.add = function(AddressData) {
    return new Address(AddressData).save();
};

exports.removeOne = function(city) {
    return Address.findOneAndRemove(city);
};

exports.findOne = function (city) {
    return Address.findOne(city);
}

exports.find = function (Data) {
    return Address.find(Data);
}