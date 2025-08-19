import postgres from "postgres";

export default class PostRegister {
    async run(title: string, description: string, autor: string) {
        this.validatePost(title, description, autor);
        await this.savePost(title, description, autor);
    }

    validatePost(title: unknown, description: unknown, autor: unknown) {
        if (typeof title !== 'string' || title.length > 40) throw new Error('Invalid title format');
        if (typeof description !== 'string' || description.length > 100) throw new Error('Invalid description format');
        if (typeof autor !== 'string' || autor.length > 30) throw new Error('Invalid autor format');
    }

    async savePost(title: string, description: string, autor: string) {
           const connectionString = 'postgresql://postgres.wnkutridtrlrzngrksgo:Brandon12345678@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
           const sql = postgres(connectionString)
   
           await sql `INSERT INTO public.posts(title, description, autor) VALUES (${title},${description}, ${autor} )`;
   
    }
}
