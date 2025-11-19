import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ProduitFlawers(){
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/Flowers")
        .then((repose)=>repose.json())
        .then((data)=>setdata(data))
        .catch((err)=>console.log(err))
    },[])

    const [panier , setpanier] = useState([])
    const HandAjout = (Flower) =>{
         setpanier([...panier,Flower])
    }
    
    const Handsub = (del)=>{
          const Filter = panier.filter((p,i)=>
             i!==del
          )
          setpanier(Filter)
        }
       
    const total = panier.reduce((acc,item)=>acc+item.price,0)
    return(
        <>
        
        <h1 style={{textAlign:"center"}}>🌺Flowers</h1>
        
        <div className="container" id="about">
            {data.map((d,index)=>{
                return(
                <div className="nav1">
                   <img src={d.images}/>
                   <div className="para">

                   <p><b>Title de Flower est : </b>{d.title}</p>
                    <p><b>Prix de Flower est :</b>{d.price} DH</p>

                   </div>
                   <Link to={`/produitflower/${d.id}`}>
                    <button><b>Daitaits Flower</b></button>
                   </Link>
                   <a href="#panier">
                       <button style={{backgroundColor:'darksalmon'}} onClick={()=>HandAjout(d)}><b>Ajouter un panier</b></button>
                   </a>
                </div>   
                )
            })}

        </div>

        <div>
       {panier.length===0?(
        <>
        
        <p>Aucun Flower dans le panier</p>
        <h4>Total:0 DH</h4>
        </>
       ):
       <>
       
       <h1 style={{textAlign:'center'}} className="panier" id="panier">🛒Panier</h1>
       <div style={{ 
                                    padding: "20px",
                                    borderRadius: "15px",
                                    background: "linear-gradient(135deg, #FDEFF9, #E0F7FA)", 
                                    width: "fit-content",
                                    fontFamily: "Arial, sans-serif",
                                    color: "#333",
                                    boxShadow: "0 20px 10px rgba(0,0,0,0.15)", 
                                    width:'700px',display:'flex',flexWrap:'wrap',gap:"20px"}}>
        {panier.map((item,i)=>(
              <div key={i} className="nav1" >
                  <img src={item.images}/>
                  <p style={{boxShadow:'0 2px 8px rgba(0, 0, 0, 0.57)'}}>{item.title}</p>
                  <p style={{boxShadow:'0 2px 8px rgba(0, 0, 0, 0.57)'}}>{item.price} DH</p>
                  <button onClick={()=>Handsub(i)}>supprimer</button>
                </div>
            ))
           
        }
       </div>
       </>
}

<h1>Totale ast {total}DH</h1>
    </div>
  
    
        </>
    )
} 