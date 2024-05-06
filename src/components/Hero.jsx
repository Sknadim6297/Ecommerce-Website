import React from 'react'
import WomanImg from '../assets/img/woman_hero.png';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <section className="h-[700px] bg-[url('https://images.unsplash.com/photo-1518691340140-512e66ce957b?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center py-24">
    <div className='container mx-auto flex justify-around h-full '>
      <div className='flex flex-col justify-center'>
      <div className='font-semibold flex items-center'>
      <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
      </div>
      <h1 className='text-[70px] leading-[1.1] font-light mb-4'>Summer Sale<br />
      <span className='font-semibold'>Womans</span></h1>
      <Link to={'/'} className='self-start font-semibold border-b-2 border-primary'>Discover More</Link>
      </div>
      <div className='hidden lg:block'>
        <img src={WomanImg} alt="" />
      </div>
    </div>
    </section>
  )
}
export default Hero
