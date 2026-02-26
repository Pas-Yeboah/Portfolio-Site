import React from 'react'

const Footer = () => {
  return (
    <footer className=' flex   gap-5 mx-72  text-md -mt-1 '>
      <div className='flex justify-center items-center'>
        <img src="https://img.icons8.com/ios-glyphs/30/github.png"  alt="" />
        <a href="https://github.com/Pas-Yeboah" target='_blank' className='text-zinc-500 hover:text-zinc-900'>Let's collaborate on github</a>
      </div>
       <div className='flex justify-center items-center'>
        <img src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="" />
         <a href="https://www.linkedin.com/in/philipa-yeboah/" target='_blank'className='text-zinc-500 hover:text-zinc-900'>Connect with me on LinkedIn</a>
       </div>
        <div className='flex justify-center items-center'>
          <img src="https://img.icons8.com/ios/50/gmail--v1.png" className='w-8 h-8' alt="" />
          <a href="mailto:philipay65@gmail.com" target='_blank' className='text-zinc-500 hover:text-zinc-900'>Send a mail</a>
        </div>
    </footer>
  )
}

export default Footer