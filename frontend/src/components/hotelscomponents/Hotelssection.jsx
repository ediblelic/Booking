import React, { useEffect } from 'react'
import { useContext } from 'react'
import { NumofpeopleContext } from '../../NumofpeopleContext'
import {FilterHotelsContext} from '../../FilterHotelsContext'
import Calendar from 'react-calendar'
import {Link} from 'react-router-dom'
import format from 'date-fns/format'
import './hotelssection.css'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
const Hotelssection = (props) => {
  const [numofpeople,setNumofpeople] = useContext(NumofpeopleContext)
  let filterNumofPeople;
  const [hotels,setHotels] = useState([])
  const [range,setRange] = useState(0)
  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const [openCalendar,setOpenCalendar] = useState(false)
  const [opensdCalendar,setOpensdCalendar] = useState(false)
  const [loading,setLoading] = useState(true)
  if (openCalendar == true && opensdCalendar == true){
    setOpenCalendar(false)
    setOpensdCalendar(false)
  }
  const getDefaultHotels = async () => {


      const gethotels =  await fetch('http://localhost:8000/api/hotels');
      const data = await gethotels.json()
      setHotels(data)
      setLoading(false)
      
    
  }
  filterNumofPeople = hotels.filter(each => each.numofpeople >= parseInt(numofpeople))
  
  useEffect(() => {
    getDefaultHotels()
    console.log('!!!!',filterNumofPeople)
  },[])
  
  const {t,i18n} = props
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
        <Link to={''}>
         <p style={{color:'orange'}}>{t('default.1')}</p>
        </Link>
        <Link to={'low-to-high'} style={{color:'black'}}>
         <p>{t('low.1')}</p>
        </Link>
         <Link style={{color:'black'}} to={'high-to-low'}>
         <p>{t('high.1')}</p>
        </Link>
        </div>
      </div>
    </div>
    <div className="allhotels">
      <div className="container">
        <div className="items">
            {loading && <PulseLoader className='spiner' />}
            <div className="gridhotels">
            {filterNumofPeople.map(hotel => {
              return(
                <div className='cards'>
                    <img className='pictures' src={hotel.frimg}  alt="" />
                    <h3 className='text'>{hotel.title}</h3>
                    <p>{t('shortdesc.1')}</p>
                    <h3 className='price'>{t('starting.1')} {hotel.price}$</h3>
                     <Link to={'/'} className='links'>
                     <p>{t('details.1')}</p>
                     </Link> 
                    <hr  width='30px' color='orange'/>
                </div>
                
                )
              })}
          </div>
           
          <div className="reservation">
            <h2 style={{textTransform:'uppercase'}}>{t('reservation.1')}</h2>
            <p>{t('starting.1')} {range}$</p>
            <input type="range" min='0' max="500" value={range} onChange={(e)=> {setRange(e.target.value)}} />
           <div className="checkoutsection">
            {openCalendar &&   <Calendar  className='calendare'   onChange={setCheckin} minDate={new Date()} 	 />}
        <label htmlFor="checkin" style={{fontSize:'1.5rem',paddingRight:'1rem'}}>Check in:</label>
        <input type="date" name='checkin' className='headerSearchIcone' onClick={() => setOpenCalendar(!openCalendar)}  onChange={setCheckin} value={format(checkin,'yyyy-MM-dd')} />
          <label htmlFor="checkout" style={{fontSize:'1.5rem',paddingRight:'1rem'}}>Check out:</label>
          <input type="date" name='checkout' className='headerSearchIcone' value={format(checkout,'yyyy-MM-dd')}  onClick={()=>setOpensdCalendar(!opensdCalendar) } />
           </div>
            <button className='submit' type='submit'>{t('filter.1')}</button>
            
          </div>
        </div>
      </div>
      <div className='devision'></div>
    </div>
    </>
  )
}

export default Hotelssection