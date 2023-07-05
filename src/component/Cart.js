import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'
import { Sub } from '../redux/actions/action'
import { useDispatch } from 'react-redux'

const Cart = ({index}) => {
  const dispatch = useDispatch()
  const cartInfo = useSelector((s)=> s.addReducer)
  console.log(cartInfo.carts)
  const total = useSelector((s)=> s.CalTotal)
  const count = useSelector((S)=> S.addCountReducer)
  const deleteItem = (e) =>{
    dispatch(Sub(e))
    console.log(e)
  }
  // console.log("Total is " + total.total)
  return (
    <div>
      <div className="cartImgContainer">
      <Link to={"/cart/2"}>

        <img src={cartInfo.carts[index].imgdata} style={{height:"100px", width:"100px"}} alt="" />
      </Link>
      </div>
      <div className="cartWrapper">

      <div className="cartInfoContainer">
        <p> Resturant Name: {cartInfo.carts[index].rname}</p> 
        <p> Price: {cartInfo.carts[index].price}   </p>
        <p>Quantity: {count.count}</p>
      </div>
      <div className="deleteContainer">
      <i className="fa-solid fa-trash" style={{color:"#ef0b0b", margin:" 10px"}} onClick={() =>deleteItem(cartInfo.carts[index].id)}></i>
      </div>
      </div>
      <p>Total : {total.total} </p>
    </div>
  )
}

export default Cart
