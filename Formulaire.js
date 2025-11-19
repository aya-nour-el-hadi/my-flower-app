import { useState } from 'react'
import './Form.css'
import { Link } from 'react-router'
import ProduitFlawers from './ProduitFlawers'
export default function Formulaire(){
    const [nom,setnom]= useState('')
    const [prénom,setprénom]= useState('')
    const [email,setemail]= useState('')
    const [pass,setpass]= useState('')
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const HandSubmit = (e)=>{
         e.preventDefault()
         if(!(nom) || !(prénom) || !(email) || !(pass) ){
            alert('Saisie les champs !!! ')   
        
         }else if( !(passwordRegex.test(pass))){
              alert("Password must be at least 8 characters, include uppercase, lowercase and a number.")
         }
         
         else{
             window.location.href = "/ProduitFlawers";
         }
        
    }
    return(
        <div className='form'>
            <form onSubmit={HandSubmit}>
                <label>Nom : </label><br></br>
                <input type="text" placeholder="saisir le nom..." onChange={(e)=>setnom(e.target.value)} required/><br></br>
                <label>Prénom : </label><br></br>
                <input type="text" placeholder="saisir le prénom..."  onChange={(e)=>setprénom(e.target.value)}/><br></br>
                <label>Email : </label><br></br>
                <input type="email" placeholder="saisir email..."  onChange={(e)=>setemail(e.target.value)}/><br></br>
                <label>Pass word</label><br></br>
                <input type="password" placeholder="saisir le password... "  onChange={(e)=>setpass(e.target.value)}/><br></br>
                <input type='submit' />

            </form>
        </div>
    )
}