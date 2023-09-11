import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({  links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {
            links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} tittle={link.tittle} />
                </li>
                )
            )
        }
    </ul>
  )
}

export default MenuOverlay