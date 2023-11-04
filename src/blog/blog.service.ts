import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Blog } from './schemas/blog.schema';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel('Blog')
    private BlogModel: mongoose.Model<Blog>,
  ) {}

  async findAll(): Promise<Blog[]> {
    const Blogs = await this.BlogModel.find();
    return Blogs;
  }

  async create(Blog: Blog): Promise<Blog> {
    const res = await this.BlogModel.create(Blog);
    return res;
  }

  async findById(id: string): Promise<Blog> {
    const Blog = await this.BlogModel.findById(id);

    if (!Blog) {
      throw new NotFoundException('Blog not found.');
    }

    return Blog;
  }

  async updateById(id: string, Blog: Blog): Promise<Blog> {
    return await this.BlogModel.findByIdAndUpdate(id, Blog, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Blog> {
    return await this.BlogModel.findByIdAndDelete(id);
  }
}
