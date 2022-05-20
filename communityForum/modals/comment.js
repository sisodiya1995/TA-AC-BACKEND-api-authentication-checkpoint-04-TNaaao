let mongoose = require('mongoose');
let schema = mongoose.Schema;

let commentSchema = new schema(
  {
    text: { type: String, unique: true, require: true },
    author: { type: schema.Types.ObjectId, ref: 'Profile' },
    answerId: { type: schema.Types.ObjectId, ref: 'Answer' },
    questionId: { type:schema.Types.ObjectId, ref: 'Question' },
  },
  { timestamps: true }
);

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;