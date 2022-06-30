import React from 'react'
import Home from './Home'
import { Route,Routes } from 'react-router'
import { useLocation } from 'react-router'
import Error from './Error'
import Hotels from './Hotels'
import { NumofpeopleProvider } from '../NumofpeopleContext'
import {FilterHotelsProvider} from '../FilterHotelsContext'

import LowToHigh from './LowToHigh'
function Pages() {
    const location = useLocation()
   
  return (
    <>
      
       <NumofpeopleProvider >
         

          <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<Home  />} />
                <Route path='/hotels' element={<Hotels />} />
                <Route path='/error' element={<Error />} />
                <Route path='/hotels/low-to-high' element={<LowToHigh />} />
            </Routes>
         
        </NumofpeopleProvider>
      
        </>
  )
}

export default Pages