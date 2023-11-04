import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  TEST ='Test',
  CRICKET = 'Cricket',
  JOURNEY = 'Journey',
  GENERIC = 'Generic',
  MOVIES = 'Movies',
}

@Schema({
  timestamps: true,
})
export class Blog {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  writer: string;

  @Prop()
  category: Category;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
