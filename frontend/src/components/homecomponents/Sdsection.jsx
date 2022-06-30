import React from 'react'
import './sdsection.css'
import main from '../../assets/mainassets/main.jpg'
function Sdsection(props) {
    const {t,i18n} = props
  return (
    <div className='sdsection'>
        <div className="container">
            <div className="content">

            <div className="mainlogo">
                <img src={main} alt=""  width="300px"/>
            </div>
            <div className="textmain">
                <h1 className='heading'>{t('heading.1')}</h1>
                <p className='dummytext'>{t('dummylorem.1')}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sdsection