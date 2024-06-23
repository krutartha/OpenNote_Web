import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import { navBarLinks } from '@/constants'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
  


const Nav = () => {
  return (
    <section className='h-full bg-[#191919] shadow-sm shadow-gray-950/80  w-72 flex flex-col items-center p-5 gap-5'>
        {/* LOGO */}
        <div className=''>
            <Link className='mx-5' href="/">
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-mono'>OpenNote.</h1>
            </Link>
        </div>
        {/* NAV LINKS */}
        <div className='flex flex-1 flex-col gap-10  w-full p-2'>
            {navBarLinks.map(({url, name, icon})=>(
                <Link className='flex gap-3 items-center justify-start' key={name} href={url}>
                    <Image className='rounded-full ' src={icon} width={27} height={27} alt={name}/>
                    <div className='flex justify-start items-center min-w-20'>
                        <h1 className='font-mono text-md'>{name}</h1>
                    </div>
                </Link>
            ))}
        </div>
        <div className='flex items-center justify-evenly p-5 gap-5 w-full'>
        <Link href="/" className='md:block hidden'>
            <Image src="/icons/create.svg" alt="logo" width={27} height={27} />
        </Link>
        <div className='flex border items-center justify-center border-gray-300 rounded-lg gap-2 w-auto'>
            <input className='w-full bg-transparent p-1' placeholder='search for notes or tags' />
            <Image className="self-center"src="/icons/search.svg" width={15} height={15} alt='search icon'/>
        </div>
        {/* <Link href="/" className='md:block hidden'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </Link> */}
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
        </div>
        {/* MOBILE NAVIGATION */}
        <div></div>
    </section>
  )
}

export default Nav