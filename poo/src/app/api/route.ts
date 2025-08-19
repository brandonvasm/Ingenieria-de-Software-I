import { NextRequest, NextResponse } from 'next/server';
import postgres from 'postgres';
import PostRegister from '../utils/post-register';


export async function POST(request: NextRequest) { 


    try {
    const data = await request.json();

    const registrar = new PostRegister();
    await registrar.run(data.title, data.description, data.autor);


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




   




    

    


