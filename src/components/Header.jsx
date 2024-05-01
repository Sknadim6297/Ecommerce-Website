import React from 'react'
import { useContext } from 'react'
import { SideBarContext } from '../context/SideBarContext'
import { BsBag } from 'react-icons/bs'

function Header() {
  const {isOpen,setIsOpen} = useContext(SideBarContext)
  return (
    <header className='bg-pink-200 '>
      <div>
        Header
      </div>
      <div className='cursor-pointer flex relative ' onClick={()=>setIsOpen(!isOpen)}>
      <BsBag className='text-2xl'/>
      </div>
      
    </header>
  )
}

export default Header
