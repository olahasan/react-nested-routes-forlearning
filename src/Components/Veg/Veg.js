import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Meals from '../Meals/Meals'
import Dessets from '../Dessets/Dessets'
import Healthy from '../Healthy/Healthy'
import Drinks from '../Drinks/Drinks'
import Vej from '../Vej/Vej'
import Sheader from '../Sheader/Sheader'
import VV from '../VV/VV'

function Veg() {
  return (
    <div>
        <Routes>
            <Route path='/Menu/Meals' element={ <Meals /> }/>
            <Route path='/Menu/Dessets' element={ <Dessets /> }/>
            <Route path='/Menu/Healthy' element={ <Healthy /> }/>
            <Route path='/Menu/Drinks' element={ <Drinks /> }/>

            <Route path='/Menu/Healthy/Veg' element={ <Veg /> }/>
            <Route path='/Menu/Healthy/Vej' element={ <Vej /> }/>
        </Routes>
        <Sheader />
        <VV />
        Veg in Healthy in Menu, HI
    </div>
  )
}

export default Veg