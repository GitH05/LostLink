import React from 'react'
import './CardItem.css'
import { Link } from 'react-router-dom'
const CardItem = ({item}) => {
  return (
   
    
       
    
  <div class="nft">
    <div class='main'>
      <img class='tokenImage' src={item.itemimage} alt={item._id} />
      <h2>{item.itemname}</h2>
      <p class='postdescription'>{item.description.slice(0,30)}</p>
      <div class='tokenInfo'>
        <div class="cardstatus">
          <ins>◘</ins>
          {item.status.toUpperCase()}
        </div>
        <div class="duration">
          <ins>◷</ins>
          {item.postdate.slice(0,10)}
        </div>
      </div>
      <hr />
      
      <Link className="cardContactButton" to={`/postdetail/${item._id}`} >Contact</Link>
      
      
    </div>
  </div>
       

    
   
  )
}

export default CardItem
