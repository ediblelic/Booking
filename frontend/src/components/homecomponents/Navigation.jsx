import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/navassets/logo.png'
import search from '../../assets/navassets/search.svg'
import shopping from '../../assets/navassets/shopping.svg'
import menu from '../../assets/navassets/menu.svg'
function Navigation(props) {
    const {t,i18n} = props
  return (
    <div className="Navigation">
        <div className="container">
            <div className="brand">
                <Link to={'/'}>
                <img className='logo' src={logo} alt="" />
                </Link>
            </div>
            <div className="navlist">
                <ul>
                    <li>{t('home.1')}</li>
                    <li>Rooms</li>
                    <li>Pages</li>
                    <li>{t('blog.1')}</li>
                    <li>Portfolio</li>
                    <li>Elements</li>
                </ul>
                <img className='navicons' src={search} alt="" />
                <img className='card' src={shopping} alt="" />
                <img className='navicons' src={menu} alt=""  />
            </div>
        </div>
    </div>
  )
}

export default Navigation