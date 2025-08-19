import postgres from "postgres";
import Post from "./post";

export default class PostRegister {
    async run(title: string, description: string, autor: string) {
        const post = Post.create(title, description, autor)
        await this.savePost(post.title.value, post.description.value, post.autor.value);
    }


    async savePost(title: string, description: string, autor: string) {
           const connectionString = 'postgresql://postgres.wnkutridtrlrzngrksgo:Brandon12345678@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
           const sql = postgres(connectionString)
   
           await sql `INSERT INTO public.posts(title, description, autor) VALUES (${title},${description}, ${autor} )`;
   
    }
}
