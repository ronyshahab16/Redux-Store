import React from 'react'
import Cardsdata from "./cardDetail"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Add} from "../redux/actions/action"
import { cal_total } from '../redux/actions/action'
const Card = ({index}) => {

  const dispatch = useDispatch()
  const send =(e)=>{
    dispatch(Add(e))
    dispatch(cal_total(e.price))
  }
  return (
    <div style={{marginTop:"1em"
    }}>
      <div className="cardContainer">
         <div className="imgContainer">

         <img src={Cardsdata[index].imgdata} alt="" />
         </div>
         <div className="detailContainer">
            <p>{Cardsdata[index].rname}</p>
            <div className="priceContainer">
              <p>{Cardsdata[index].price}</p>
            </div>
         </div>
         

         <button style={{padding:"0.7em", background:"blue", color:"white", border:"none"}}
         onClick={()=>send(Cardsdata[index])}
         >
        

         Add to cart
         
         </button>
         
          </div>
    </div>
  )
}

export default Card
