import './Dasclaimer.css'
import Disclaimer from '../assets/Disclaimerlogo.jpg'
import { useEffect, useState } from 'react'
const Dasclaimer = () =>{ 
    const [disclaimertime,setdisclaimertime]=useState(7)
    useEffect(()=>{
setInterval(() => {
    if(disclaimertime>0){
    setdisclaimertime(disclaimertime-1)}
    else{
        return
    }
}, 1000);
    })
    return(
    <div className="dasclaimer">
        <img className='imagedisclaimer' src={Disclaimer} alt='disclaimer'/>
        <h3 className="dasclaimertext">Claim your lost item within the campus only No outside claims allowed

</h3>

<p style={{color:'white',textAlign:'center',marginTop:'40px'}}>please wait for {disclaimertime} second.....</p>
    </div>
  )}
  export default Dasclaimer
