"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'



interface FormData {
    title: string;
    content: string;
    image_url: string;
    likes: number;
    dislikes: number;
}

interface Error {
    name?: string;
    owner_name?: string;
    species?: string;
    image_url?: string;
}

interface formProps {
  id? : string
}

const Form = ({id} : formProps) => {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    if(id){

      console.log(`found id value: ${id}`)
      fetchPost(id)
    }
  },[])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const noteData: FormData = {
      title: title,
      content: content,
      image_url: imageUrl,
      likes: 0,
      dislikes: 0
    }
    const res = id? await fetch(`/api/notes/${id}`, {
      method: "PATCH",
      body: JSON.stringify(noteData),
    }) : await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(noteData),
    });
    if(res.ok){
      id? console.log("UPDATE SUCCESS") : console.log("POST SUCCESS");
      router.push("/")
    }
    else{
      console.log(res)
    }
  }

  const handleDelete = async () => {
    const del = confirm("Are you sure you want to delete this note?")
    if(del){
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE"
      });
      if(res.ok){
        console.log("DELETE SUCCESS")
        router.push("/")
      }
      else{
        console.log(res)
      }
    }
  }

  const fetchPost = async (id: string) => {
    const res = await fetch(`/api/notes/${id}`, {
      method: "GET",
    });
    if(res.ok){
      const {title, content, image_url, likes, dislikes} = await res.json();
      const note = {
        title: title,
        content: content,
        image_url: image_url,
        likes: likes,
        dislikes: dislikes
      }
      console.log(note)
      setTitle(note.title)
      setContent(note.content)
      setImageUrl(note.image_url)
      console.log("Note fetch success!")
    }
  }


  return (
    <section className='flex flex-col gap-10'>
      <h1 className='text-4xl font-thin'>{id? 'Edit Note' : 'Upload Note'}</h1>
      <div className='w-full'>
        <form className='flex flex-col gap-10 text-black' onSubmit={handleSubmit}>
          <input className="h-10 w-full rounded-md p-3"  defaultValue={title ? title:  undefined} placeholder='Title' onChange={(e)=> {setTitle(e.target.value)}}/>
          <textarea className="h-52 w-full rounded-md p-3" defaultValue={content ? content : undefined} placeholder='Description' onChange={(e)=> {setContent(e.target.value)}}/>
          <input className="h-10 w-full rounded-md p-3" defaultValue={imageUrl ? imageUrl : undefined} placeholder='Image URL' onChange={(e)=> {setImageUrl(e.target.value)}}/>
          <div className='flex gap-5 items-center justify-center'>
            <button type="submit" className=' text-white bg-[#154532] w-40 p-5 rounded-lg self-center'>{id? `Update` : 'Post'}</button>
            {id? <button type='button' className=' text-white bg-[#6f252a] w-40 p-5 rounded-lg self-center' onClick={()=> {handleDelete()}}>Delete</button> : <></>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form