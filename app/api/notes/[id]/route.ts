import dbConnect from "@/lib/database"
import Note from "@/models/Note";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params} : {params: {
    id: string
}}) {
    try {
        await dbConnect();
        const note = await Note.findById(params.id);
        if(!note) return new NextResponse("Note not found", {status: 400})
        return new NextResponse(JSON.stringify(note), { status: 200 })
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function PATCH(request: NextRequest, {params} : {params: {
    id: string
}}) {
    const { title, content, image_url, likes, dislikes } = await request.json();
    try {
        await dbConnect();
        const existingNote = await Note.findById(params.id);
        if(!existingNote) return new NextResponse("Note not found", {status: 400})
        existingNote.title = title;
        existingNote.content = content;
        existingNote.image_url = image_url;
        await existingNote.save();
        return new NextResponse("Successfully updated the Note!", { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse("Error updating Note!", { status: 500 });
    }
}

export async function DELETE(request: NextRequest, {params} : {params: {
    id: string
}}) {
    try {
        await dbConnect();
        const note = await Note.findByIdAndDelete(params.id);
        if(!note) return new NextResponse("Note not found", {status: 400});
        return new NextResponse("Successfully deleted the note.", {status: 200})
    } catch (error) {
        console.log(error);
        return new NextResponse("Error deleting Note.", { status: 500 });
    }
    
}