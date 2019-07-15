import mongoose from 'mongoose'

let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  //NOTE "unique" and "lowercase" modifiers are IMPORTANT
  title: { type: String, required: true, maxlength: 60 },
  summary: { type: String, maxlength: 120 },
  slug: { type: String, required: true, unique: true, lowercase: true },
  author: { type: String, required: true },
  img: { type: String, required: true },
  body: { type: String, required: false },
  tags: { type: Array, required: false }

}, { timestamps: true })

export default mongoose.model('Blog', _schema)