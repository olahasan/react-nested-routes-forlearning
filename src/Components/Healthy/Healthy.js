import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Meals from '../Meals/Meals';
import Dessets from '../Dessets/Dessets';
// import Healthy from '../Healthy/Healthy';
import Drinks from '../Drinks/Drinks';
import Sheader from '../Sheader/Sheader'

import VV from '../VV/VV'
import Veg from '../Veg/Veg'
import Vej from '../Vej/Vej'

function Healthy() {
  return (
    <div>
      <Routes>
            <Route path='/Menu/Meals' element={ <Meals /> }/>
            <Route path='/Menu/Dessets' element={ <Dessets /> }/>
            {/* <Route path='/Menu/Healthy' element={ <Healthy /> }/> */}
            <Route path='/Menu/Drinks' element={ <Drinks /> }/>

            
            <Route path='/Menu/Healthy/Veg' element={ <Veg /> }/>
            <Route path='/Menu/Healthy/Vej' element={ <Vej /> }/>

        </Routes>
        <Sheader />
        <VV />
      Healthy in Menu
      </div>
  )
}

export default Healthy