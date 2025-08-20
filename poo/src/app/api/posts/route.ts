import { NextRequest, NextResponse } from 'next/server';
import postgres from 'postgres';
import PostRegister from '../../utils/post-register';
import PostgresPostRepository from '../../utils/postgres-post-repository';


export async function POST(request: NextRequest) { 

    try {
        const data = await request.json();

        const repository = new PostgresPostRepository();

        const registrar = new PostRegister(repository);
        await registrar.run(data.title, data.description, data.autor);


        return NextResponse.json({
            message: 'Post saved succesfuly'
        })
        } catch (error){
        console.error('Error saving post:', error);
        return NextResponse.json (
            {error: 'Fail to save post'},
            {status: 500}

        )}

}


export async function GET() {
    try {
        const repository = new PostgresPostRepository();
        const posts = await repository.getAll();

        return NextResponse.json(
            posts, 
            { status: 200 });
        } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json(
            { message: 'Error fetching posts' }, 
            { status: 500 }
        )}
    
}





   




    

    


