import { Link, useParams } from "react-router"
import { useEffect, useState } from "react";
export default function Daitaits(){
    
    const [data,setdata] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3000/Flowers?id=${id}`)
        .then((repose)=>repose.json())
        .then((data)=>setdata(data))
        .catch((err)=>console.log(err))
    },[])

    return(
        <>

        <div style={{textAlign:'center' , marginTop:'40px'}}>
            {
                data.map((d) => {
                    return (
                        <>
                            <img  
                                src={d.images}
                                width="250"
                                style={{borderRadius:"10px"}}
                            />
                            <div>
                          <div style={{width:''}}>
                             <p><b>Title  :</b></p> 
                            <p>{d.title}</p>
                            <p><b>Prix :</b></p>
                            <p>{d.price}DH</p>

                          </div>
                            <p  style={{
                                    padding: "20px",
                                    borderRadius: "15px",
                                    background: "linear-gradient(135deg, #FDEFF9, #E0F7FA)", 
                                    width: "fit-content",
                                    fontFamily: "Arial, sans-serif",
                                    color: "#333",
                                    boxShadow:'0 10px 10px rgba(0, 0, 0, 0.57)', 
                                    width:'700px'
                            }}><b>{d.text}</b></p>

                            </div>
                            <Link to="/ProduitFlawers">
                            <button>Router a liste</button>   
                            </Link>
                        </>
                    )
                })
            }
        </div>
      
        </>
    )
}