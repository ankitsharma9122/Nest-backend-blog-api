import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/createBlog.dto';
import { UpdateBlogDto } from './dto/updateBlog.dto';
import { Blog } from './schemas/blog.schema';

@Controller('blogs')
export class BlogController {
  constructor(private BlogService: BlogService) {}

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.BlogService.findAll();
  }

  @Post()
  async createBlog(
    @Body()
    Blog: CreateBlogDto,
  ): Promise<Blog> {
    return this.BlogService.create(Blog);
  }

  @Get(':id')
  async getBlog(
    @Param('id')
    id: string,
  ): Promise<Blog> {
    return this.BlogService.findById(id);
  }

  @Put(':id')
  async updateBlog(
    @Param('id')
    id: string,
    @Body()
    Blog: UpdateBlogDto,
  ): Promise<Blog> {
    return this.BlogService.updateById(id, Blog);
  }

  @Delete(':id')
  async deleteBlog(
    @Param('id')
    id: string,
  ): Promise<Blog> {
    return this.BlogService.deleteById(id);
  }
}
