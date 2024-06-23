"use client"
import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'

interface notesData{
    _id: string,
    title: string,
    content: string,
    image_url: string,
    likes: number
    dislikes: number
}[]

const NotesFeed = () => {
    const [notesList, setNotesList] = useState<notesData[] | null>(null)
    useEffect(()=>{
        fetchNotes();
    },[])

    const fetchNotes = async () => {
        const res = await fetch("/api/notes", {
            method: "GET"
        });
        const data = await res.json();
        if(res.ok){
            console.log(data)
            setNotesList(data)
        }
        else{
            console.log("Error fetching feed")
        }
    }
    return (
        <div className=' flex flex-col gap-10 items-center justify-center p-5'>
            {notesList?.map(({_id, title, content, likes, dislikes})=>(
                <NoteCard key={_id} title={title} content={content} id={_id} />
            ))}
        </div>
        
    )
}

export default NotesFeed