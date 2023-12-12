import React from 'react'
import {Container,Logo, LogoutBtn} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



// conditional rendoring 
function Header() {
  const autStatus = useSelector((state) => state.auth.status )
  const navigate = useNavigate()

  const navItems = [

    {
      name: 'Home',
      slug: '/',
      active: true
    }, // login path
    {
      name: 'Login',
      slug: '/login',
      active: !autStatus,
    }, // signup
    {
      name: 'Signup',
      slug: '/signup',
      active: !autStatus
    }, // each post that will render
    {
      name: 'All Post',
      slug: '/all-post',
      active: !autStatus
    },
    {
      name: 'Add-post',
      slug: '/add-post',
      active: !autStatus
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => (
              // checking if item is active 
              item.active ? (
                <li key={item.name}>
                   <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'
                   onClick={() => navigate(item.slug)}
                   >{item.name}</button> 
                </li>
              ) : null
            ))}
            {autStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}

          </ul>
        </nav>

      </Container>
    </header>
  )
}

export default Header