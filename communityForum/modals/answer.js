let mongoose = require('mongoose');
let schema = mongoose.Schema;

let answerSchema = new schema(
  {
    text: { type: String, unique: true, require: true },
    author: { type: schema.Types.ObjectId, ref: 'Profile' },
    upvoteCount: { type: Number, default: 0 },
    upvotedBy: [{ type: schema.Types.ObjectId, ref: 'Profile' }],
    questionId: { type: schema.Types.ObjectId, ref: 'Question' },
    comments: [{ type: schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

var Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;