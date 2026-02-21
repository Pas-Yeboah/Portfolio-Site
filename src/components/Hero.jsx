import React from 'react'

const Hero = () => {
  return (
    <section className='mx-72 my-40  '>
        <h1 className=' text-2xl font- text-zinc-900'>
            Philipa  Yeboah
        </h1>
        <h4 className='text-xl text-zinc-500 mt-2'>
            Incoming Software Engineer
        </h4>

        <p className='text-zinc-900 mt-8 text-lg'>
            I’m a computer science student with a deep passion for both software and hardware. 
            I enjoy understanding how things work from the low level up to the user interface, 
            and I’m especially drawn to building experiences that feel smooth, thoughtful, 
            and well-crafted.
            
        </p>
        <p className='text-zinc-900 mt-3  text-lg'>
            I’m currently building and improving as a frontend developer, building interfaces
             with React and Tailwind CSS. I care a lot about clean UI, good UX, and the little
            details that make products feel polished and enjoyable to use.
        </p>

        <p className='text-zinc-500 mt-8 text-sm'>
            Projects
        </p>
        <div className='flex flex-col space-y-4 mt-2 text-lg'>
           <span className='flex items-center  gap-3'> <a href="">Nika</a> <p className='text-zinc-500  text-md'> ↗   A goal  tracking web app designed to help users stay motivated and track progress .</p></span>
            <span className='flex items-center gap-3'> <a href="">AnaafoSpaces</a> <p className='text-zinc-500  text-md'> ↗   A modern website for a space rental company, showcasing available spaces .</p></span>
            <span className='flex items-center gap-3'> <a href="">DisalApp</a> <p className='text-zinc-500  text-md'> ↗   An internal management web app built to streamline  workflows for a research company.</p></span>
            <span className='flex items-center gap-3'> <a href="">WeatherApp</a> <p className='text-zinc-500  text-md'> ↗   A simple and responsive weather app that displays real-time weather information .</p></span>

            
        </div>
    </section>
  )
}

export default Hero