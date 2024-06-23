import dbConnect from "@/lib/database"
import Note from "@/models/Note";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const notes = await Note.find();
        return new NextResponse(JSON.stringify(notes), {status: 200});
    } catch (error) {
        console.log(error)
        return new NextResponse("Error fetching all Notes.", {status: 400});
    }
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const {title, content, image_url, likes, dislikes} = await request.json()
        const note = await Note.create({title, content, image_url, likes, dislikes})
        return new NextResponse(note, {status: 201});
    } catch (error) {
        console.log(error)
        return new NextResponse("Error creating Note.", {status: 400});
    }
}