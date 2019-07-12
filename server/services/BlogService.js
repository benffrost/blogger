import mongoose from 'mongoose'

let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  //NOTE "unique" and "lowercase" modifiers are IMPORTANT
  title: { type: String, required: true, maxlength: 60 },
  slug: { type: String, required: true, unique: true, lowercase: true },
  author: { type: String, required: true },
  //TODO: img: { type: String, required: true },
  body: { type: String, required: true },
  tags: { type: Array, required: true }

}, { timestamps: true })

export default mongoose.model('Blog', _schema)