import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi' 
import cartItem from '../components/CartItem'
import {SideBarContext} from '../context/SideBarContext'
import { CartContext } from '../context/CartContext'


function SideBar() {
 const {isOpen,handleClose} = useContext(SideBarContext)
const {cart} =  useContext(CartContext);
  return (
    <div className={`${isOpen ? 'right-0' :'-right-full'  }

    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}>
    <div className='flex items-center justify-between py-6 border-b'>
    <div className='text-sm font-semibold'>Shopping Bag (0)</div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward
        className='text-3xl cursor-pointer'/>
      </div>
    </div>
    <div>
      {
        cart.map((item)=>{
          return(
            <div className='flex items-center justify-between border-b py-4'>
              <div className='flex gap-4 items-center'>
                <img className='w-16 h-16' src={item.image} alt="" />
                <div>
                  <h2 className='text-sm font-semibold'>{item.title}</h2>
                  <div className='text-sm text-gray-500'>${item.price}</div>
                </div>
              </div>
              <div>
                <FiTrash2 className='text-2xl text-gray-500 cursor-pointer'/>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default SideBar
