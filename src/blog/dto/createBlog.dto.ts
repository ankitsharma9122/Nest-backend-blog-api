import { Category } from '../schemas/blog.schema';

export class CreateBlogDto {
  readonly title: string;
  readonly description: string;
  readonly writer: string;
  readonly category: Category;
}
