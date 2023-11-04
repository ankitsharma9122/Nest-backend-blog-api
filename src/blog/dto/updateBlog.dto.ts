import { Category } from '../schemas/blog.schema';

export class UpdateBlogDto {
  readonly title: string;
  readonly description: string;
  readonly writer: string;
  readonly category: Category;
}
