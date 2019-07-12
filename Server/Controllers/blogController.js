import express from 'express'
import _blogService from '../Services/blogService'

export default class BlogController {
  async getAllBlogs(req, res, next) {
    try {
      let allBlogs = await _blogService.find()
      res.send(allBlogs)
    } catch (error) { next(error) }
  }
  async getBlogByTag(req, res, next) {
    try {
      let blogByTag = await _blogService.find({ tags: { $in: [req.query.tags] } })
      res.send(blogByTag)
    } catch (error) { next(error) }
  }
  async getBlogBySlug(req, res, next) {
    try {
      let blogBySlug = await _blogService.findOne({ slug: req.query.slug })
      res.send(blogBySlug)
    } catch (error) { next(error) }
  }

  async getBlogById(req, res, next) {
    try {
      let blogById = await _blogService.findById(req.params.blogId)
      res.send(blogById)
    } catch (error) { next(error) }
  }

  async createBlog(req, res, next) {
    try {
      let newBlog = await _blogService.create(req.body)
      res.send(newBlog)
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
      res.send("Blog Deleted")
    } catch (error) { next(error) }
  }

  constructor() {
    this.router = express.Router()
      .post('', this.createBlog)
      .get('', this.getAllBlogs)
      .get('/:blogId', this.getBlogById)
      .get('', this.getBlogByTag)
      .get('', this.getBlogBySlug)
      .put('/:blogId', this.editBlog)
      .delete('/:blogId', this.deleteBlog)
  }
}
//   Retrieve all blogs-
//   Retrieve blogs by query for title(slug)
// Retrieve all blogs by query for a tag-
// Retrieve a blog by id-
// Edit a blog-
// Delete a blog-





