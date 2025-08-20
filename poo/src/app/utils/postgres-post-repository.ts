import postgres from "postgres";
import Post from "./post";
import PostRepository from "./post-repository";

export default class PostgresPostRepository implements PostRepository {
  private readonly sql;

  constructor() {
    const connectionString = 'postgresql://postgres.wnkutridtrlrzngrksgo:Brandon12345678@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
    this.sql = postgres(connectionString)
  }

  async save(post: Post): Promise<void> {
    await this.sql `INSERT INTO public.posts(title, description, autor) 
    VALUES (${post.title.value},${post.description.value}, ${post.autor.value} )`;
  }

  
  async getAll(): Promise<Post[]> {
    const result = await this.sql<{ title: string; description: string; autor: string }[]>`SELECT * FROM public.posts`;
    return result.map(row => Post.create(row.title, row.description, row.autor));
  }

  
}

