import mongoose from 'mongoose'

let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 60 },//max length should be 60 characters
  slug: { type: String, unique: true, lowercase: true },//slug should be unique and lowercase
  summary: { type: String, maxlength: 120 },// no more than 120 characters
  author: { type: String, required: true },
  //img: "https://placehold.it",
  body: { type: String, },
  tags: [{ type: String }]
},
  { timestamps: true }
)
export default mongoose.model('Blog', _schema)