import express from 'express'
import _blogService from '../services/BlogService'

export default class BlogController {

  /*Retrieve all blogs
  Retrieve blogs by query for title(slug)
  Retrieve all blogs by query for a tag
  Retrieve a blog by id
  Edit a blog
  Delete a blog*/

  async getAllBlogs(req, res, next) {
    try {
      let Blogs = await _blogService.find()
      res.send(Blogs)
    } catch (error) {
      next(error)
    }
  }
  //TODO

  async getBlogBySlug(req, res, next) { } //TODO

  async getBlogsByTag(req, res, next) { } //TODO

  async getBlogByID(req, res, next) { } //TODO

  async createBlog(req, res, next) { } //TODO

  async editBlog(req, res, next) { } //TODO

  async deleteBlog(req, res, next) { } //TODO

  constructor() {
    this.router = express.Router()
      .get('', this.getAllBlogs)
      .get('/:blogSlug', this.getBlogBySlug)
      .get('/tagged/:blogTag', this.getBlogsByTag)
      .get('/id/:blogId', this.getBlogByID)
      .post('', this.createBlog)
      .put('/:blogId', this.editBlog)
      .delete('/:blogId', this.deleteBlog)
  } //TODO text and fix



}