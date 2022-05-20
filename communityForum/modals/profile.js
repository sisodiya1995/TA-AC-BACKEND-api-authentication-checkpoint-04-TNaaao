let mongoose = require('mongoose');
let schema = mongoose.Schema;

let profileSchema = new schema({
  username: { type: String, unique: true, require: true },
  name: { type: String },
  bio: { type: String },
  image: { type: String },
  isAdmin: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  upvotedQuestions: [{ type: schema.Types.ObjectId, ref: 'Question' }],
  upvotedAnswers: [{ type: schema.Types.ObjectId, ref: 'Answer' }],
  comments: [{ type: schema.Types.ObjectId, ref: 'Comment' }],
});

profileSchema.methods.profileJSON = async function () {
  let data = {
    name: this.name,
    username: this.username,
    bio: this.bio,
    image: this.image,
    isAdmin: this.isAdmin,
    isBlocked: this.isBlocked,
  };
  return data;
};

var Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;