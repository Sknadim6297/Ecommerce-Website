import React,{useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


import { SideBarContext } from '../context/SideBarContext'
import { BsBag } from 'react-icons/bs'

function Header() {
  const [isActive,setIsActive]=useState(false);
  const {isOpen,setIsOpen} = useContext(SideBarContext)
  const {itemAmount} = useContext(CartContext);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 60){
        setIsActive(true);
      }else{
        setIsActive(false);
      }
    }
  )},[])

  return (
    <header className={`${isActive ? 'bg-white py-2 shadow-md':'bg-none py-4'} fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between'>
    <Link to={'/'} >
      {/* <img src={Logo} alt="" /> */}
      <h1 className=' items-center justify-center text-xl h-[40px] w-[40px]'>NadeemEcom.</h1>
    </Link> 
      <div>
       {/* Cart */}
      </div>
      <div className='cursor-pointer flex relative' onClick={()=>setIsOpen(!isOpen)}>
      <BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
        {itemAmount}
      </div>
      </div>
      </div>
      
    </header>
  )
}

export default Header
