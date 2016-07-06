var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Author = require('./author');
  Character = require('./character');

console.log(Character);
var BookSchema = new Schema({
     title: String,
     author: {type: Schema.Types.ObjectId, ref: 'Author'},
     image: String,
     releaseDate: String,
     characters: [Character.name]
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;