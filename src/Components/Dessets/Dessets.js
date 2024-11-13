import React from 'react'

import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Meals from '../Meals/Meals';
// import Dessets from '../Dessets/Dessets';
import Healthy from '../Healthy/Healthy';
import Drinks from '../Drinks/Drinks';
import Sheader from '../Sheader/Sheader'

function Dessets() {
  return (
    <div>
        <Routes>
            <Route path='/Menu/Meals' element={ <Meals /> }/>
            {/* <Route path='/Menu/Dessets' element={ <Dessets /> }/> */}
            <Route path='/Menu/Healthy' element={ <Healthy /> }/>
            <Route path='/Menu/Drinks' element={ <Drinks /> }/>
        </Routes>
        <Sheader />
      Dessets in Menu
    </div>
  )
}

export default Dessets