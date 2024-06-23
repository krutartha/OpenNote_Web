import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { useRouter } from 'next/navigation'; 

  export interface noteCardProps{
    id: string,
    title: string,
    content: string,

}
const NoteCard = ({id, title, content} : noteCardProps) => {
  const router = useRouter();
  return (
    <div onClick={()=> {router.push(`/edit/${id}`)}}
    className='bg-gradient-to-br from-[#dcc635] to-[#f0dd60] w-96 h-96 shadow-md shadow-white/20 p-5 rounded-md text-red-500 font-mono'>
      {title}
    </div>
  )
}

export default NoteCard