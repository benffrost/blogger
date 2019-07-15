import express from 'express'
import _blogService from '../services/BlogService'

export default class BlogController {

  /*Retrieve all blogs
  Retrieve blogs by query for title(slug)
  Retrieve all blogs by query for a tag
  Retrieve a blog by id
  Edit a blog
  Delete a blog*/

  async findBlogs(req, res, next) {
    try {
      if (req.query.slug) {
        let blog = await _blogService.findOne({ slug: req.query.slug })
        res.send(blog)
      } else if (req.query.tag) {
        let blogs = await _blogService.find({ tags: { $in: req.query.tag } })
        res.send(blogs)
      } else {



        let blogs = await _blogService.find()
        res.send(blogs)
      }
    } catch (error) {
      next(error)
    }
  }

  async getBlogByID(req, res, next) {
    try {
      let blog = await _blogService.findById(req.params.blogId)
      res.send(blog)
    } catch (error) { next(error) }
  }

  async createBlog(req, res, next) {
    try {
      let blog = await _blogService.create(req.body)
      res.send(blog)
    } catch (error) { next(error) }
  }

  async editBlog(req, res, next) {
    try {
      let editedBlog = await _blogService.findByIdAndUpdate(req.params.blogId, req.body, { new: true })
      res.send(editedBlog)
    } catch (error) { next(error) }
  }

  async deleteBlog(req, res, next) {
    try {
      let deletedBlog = await _blogService.findByIdAndDelete(req.params.blogId)
      res.send("Blog Removed")
    } catch (error) { next(error) }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.findBlogs)
      .get('/:blogId', this.getBlogByID)
      .post('', this.createBlog)
      .put('/:blogId', this.editBlog)
      .delete('/:blogId', this.deleteBlog)
  }



}
