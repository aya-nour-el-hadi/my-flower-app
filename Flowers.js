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
                    <h3><b>🌷Ma Flowers</b></h3>
                </li>
                <li style={{color:'white'}}>
                    <h4><b><a href="#"  style={{color:'white'}}>About</a></b></h4>
                </li>
                <li style={{color:'white'}}><h4><b><a href="#" style={{color:'white'}}>Daitails</a></b></h4></li>
                <li style={{color:'white'}}> <h4><b><a href="#" style={{color:'white'}}>Panier</a></b></h4></li>
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
