import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) { 
    const data = await request.json();


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
    

    // proceso de la data
    return NextResponse.json({
        data 
    })
}

