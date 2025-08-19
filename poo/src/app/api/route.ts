import { NextRequest, NextResponse } from 'next/server';
import postgres from 'postgres';


export async function POST(request: NextRequest) { 


    
    const data = await request.json();

 

    isValidTitle(data.title);
    isValidDescription(data.description);
    isValidAutor(data.autor);

    await savePost(data.title, data.description, data.autor);


}




    function isValidTitle(title: unknown) {

        if (typeof title !== 'string') {
        throw new Error('Title must be a string')
        }

        if (title.length > 40 ) {
            throw new Error ('Invalid title format');
        }


    }

    function isValidDescription(description: unknown) {

        if (typeof description!== 'string') {
        throw new Error('Title must be a string')
        }

        if (description.length > 100) {
            throw new Error ('Invalid description format');
        }


    }

    function isValidAutor(autor: unknown) {

        if (typeof autor !== 'string') {
        throw new Error('Title must be a string')
        }

        if (autor.length > 30 ) {
            throw new Error ('Invalid autor format');
        }


    }


    async function savePost(title: string, description: string, autor: string): Promise <void> {
        const connectionString = 'postgresql://postgres.wnkutridtrlrzngrksgo:Brandon12345678@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
        const sql = postgres(connectionString)

        

    }

    

    


