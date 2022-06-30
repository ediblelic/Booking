import React from 'react'
import './mainsection.css'
import { useState,useEffect } from 'react'
import { Wave } from 'react-animated-text';
import 'react-calendar/dist/Calendar.css';
import Hotels from '../../pages/Hotels';
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'
import format from 'date-fns/format';
import { useContext } from 'react';
import { NumofpeopleContext } from '../../NumofpeopleContext';

function MainSection(props) {
  const {t,i18n} = props
  const [checkin, setCheckin] = useState(new Date());
  const [openCalendar,setOpenCalendar] = useState(false)
  const [opensdCalendar,setOpensdCalendar] = useState(false)
  const [checkout, setCheckout] = useState(new Date());
  const [numofpeople,setNumofpeople] = useContext(NumofpeopleContext)

  if (openCalendar == true && opensdCalendar == true){
    setOpenCalendar(false)
    setOpensdCalendar(false)
  }
  console.log(numofpeople)

  

  return (
  
    <div className="slider">
      <div className="animatetext">
        <h2>{t('title.1')}</h2>
         
      </div>
      <h1 className='animated' id='main'> <Wave text={t('maintitle.1')}
      effectChange={.2}
      effect="verticalFadeIn"
      iterations={1}/></h1>
      <hr color='orange' width="20%" />
      <p style={{textAlign:'center',color:'white',fontSize:'1.2rem',lineHeight:'3rem',paddingBottom:'2rem',}}>{t('shortdesc.1')}</p>
      <div className='headerSearch'>
        <div className='searchItem'>
          {openCalendar &&   <Calendar  className='calendare'   onChange={setCheckin} minDate={new Date()} 	 />}
        <label htmlFor="checkin" style={{fontSize:'1.5rem',paddingRight:'1rem'}}>Check in:</label>
        <input type="date" name='checkin' className='headerSearchIcone' onClick={() => setOpenCalendar(!openCalendar)}  onChange={setCheckin} value={format(checkin,'yyyy-MM-dd')} />
        </div>
        <div className='searchItem'>
        {opensdCalendar && <Calendar  className="calendare"  onChange={setCheckout} minDate={checkin}  />}
        <label htmlFor="checkout" style={{fontSize:'1.5rem',paddingRight:'1rem'}}>Check out:</label>
        <input type="date" name='checkout' className='headerSearchIcone' value={format(checkout,'yyyy-MM-dd')}  onClick={()=>setOpensdCalendar(!opensdCalendar) } />
        </div>
        <div className='searchItem'>
        <label htmlFor="checkout" style={{fontSize:'1.5rem',paddingRight:'1rem'}}>{t('numpeople.1')}:</label>
          <input type="number" placeholder='1 - 7' onChange={(e) => setNumofpeople(e.target.value)}  value={numofpeople} />

        </div>
        <Link className='btn' to={parseInt(numofpeople) > 9 || parseInt(numofpeople) <= 0  || numofpeople === '' ? '/error':'/hotels'} >
          <button

          className='btn'>{t('booknow.1')} </button>

          </Link>
       

      </div>
      
    </div>
  )
  
  }

export default MainSection