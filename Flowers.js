import {Routes,Route, Link} from "react-router"
import ProduitFlawers from "./ProduitFlawers"
import Formulaire from "./Formulaire"
import Daitaits from "./Daitails"
import './Flowers.css'
export default function Flowers(){

      return(
        <>
        <div className='nav'>
            <ul>
                <li className='but'>
                    <h1 style={{textAlign:'center'}}><b>🌷Ma Flowers</b></h1>
                </li>
            </ul>
        </div>
              <Routes>
                <Route path="/" element={<Formulaire />}/>
                <Route path='/ProduitFlawers' element={<ProduitFlawers />}/>
                <Route path="/produitflower/:id" element={<Daitaits />}/>
              </Routes>
        </>
      )
}
