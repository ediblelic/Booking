import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { FilterHotelsContext } from '../../FilterHotelsContext'
import { PulseLoader } from 'react-spinners'
import './lowtohighsection.css'
function LowToHighSection(props) {
    const {t,i18n} = props 
    let  filterNumofPeople = useContext(FilterHotelsContext)
    console.log(filterNumofPeople)
  return (
    <>
        <div className='container'>
            <div className="hotels">
            <div className="hotelsearch">
                <h2 className='smalltitle'>{t('hotelsearch.1')}</h2>
            </div>
            <div className="hotelnav">
                <Link to='/' className='tohome'>
                <h2>{t('home.1')}</h2>
                </Link>
                <h2>/</h2>
                <h2>{t('hotelsearch.1')}</h2>
            </div>
            </div>
        </div>
    <div className="filters">
      <div className="container">
        <div className="filter">
        <Link to={'../hotels'}>
         <p style={{color:'black'}}>{t('default.1')}</p>
        </Link>
        <Link to={''} style={{color:'orange'}}>
         <p>{t('low.1')}</p>
        </Link>
         <Link style={{color:'black'}} to={'../hotels/high-to-low'}>
         <p>{t('high.1')}</p>
        </Link>
        </div>
      </div>
    </div>
    <div className="allhotels">
      <div className="container">
        <div className="items">
      <PulseLoader className='spiner'/>
          <div className="gridhotels"> 
          
          </div>
        </div>
      </div>
    </div>  
      </>
  )
}

export default LowToHighSection