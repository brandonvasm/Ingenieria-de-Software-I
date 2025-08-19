import { NextRequest, NextResponse } from 'next/server';
import postgres from 'postgres';


export async function POST(request: NextRequest) { 


    try {
    const data = await request.json();

    validatePost(data.title, data.description, data.autor);
    await savePost(data.title, data.description, data.autor);

    NextResponse.json({
        message: 'Post saved succesfuly'
    })
    } catch (error){
    console.error('Error saving post:', error);
    return NextResponse.json (
        {error: 'Fail to save post'},
        {status: 500}

    )}

}




    function validatePost(title: unknown, description: unknown, autor: unknown) {
    if (typeof title !== 'string' || title.length > 40) throw new Error('Invalid title format');
    if (typeof description !== 'string' || description.length > 100) throw new Error('Invalid description format');
    if (typeof autor !== 'string' || autor.length > 30) throw new Error('Invalid autor format');
}



    async function savePost(title: string, description: string, autor: string): Promise <void> {
        const connectionString = 'postgresql://postgres.wnkutridtrlrzngrksgo:Brandon12345678@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
        const sql = postgres(connectionString)

        await sql `INSERT INTO public.posts(title, description, autor) VALUES (${title},${description}, ${autor} )`;

    }

    

    


