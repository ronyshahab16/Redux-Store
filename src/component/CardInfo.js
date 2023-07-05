import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cardsdata from "./cardDetail";
import Header from "./Header";
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { addCount } from "../redux/actions/action";
import { subCount } from "../redux/actions/action";


import { cal_total } from "../redux/actions/action";
const CardInfo = () => {
  
  const dispatch = useDispatch()
  const counts = useSelector((s)=> s.addCountReducer)
  const data = useSelector((s)=> s.addReducer)
  console.log(data)
  const { index } = useParams();
  const totalInPage = Cardsdata[index].price * counts.count;
  const total = useSelector((s)=> s.CalTotal.total)
  
  // console.log(counts)
  const countTotal = () =>{
      
        dispatch(cal_total(totalInPage))
        console.log("THis is total" , total)
  }

  useEffect(()=>{
    countTotal()
  },[dispatch,totalInPage])
  
  const reduceCount = () => {
    dispatch(subCount())
  };
  const increaseCount = () => {
    
    dispatch(addCount())
    
  };
  return (
    <div>
      <Header />

      <div className="itemInfoContainer">
        <h1>Item Detail Page</h1>
    <div className="cardInfoButtonContainer">
  
    <Link to={"/"} style={{padding:"0.5em", background:"blue", color:"white", margin:"0 auto", listStyle:"none", textDecoration:"none"}}> Go back</Link>
    </div>
        <div className="itemContainer">
        <div className="onlyItemInfoContainer">

          <div className="itemImgContainer">
            <img src={Cardsdata[index].imgdata} alt="" />
          </div>
          <div className="infoContainer">
            <p>
              {" "}
              <strong>Restaurant: </strong>
              {Cardsdata[index].address}
            </p>
              <br />
            <p>
              {" "}
              <strong>Price: </strong>
              {Cardsdata[index].price}
            </p>

            <div className="totalCounter">
              <p>
                {" "}
                <strong>Total: </strong>
                {total}
              </p>
            </div>
            <p className="ratingContainer">
              
              <strong>Rating: </strong>
              {
                Cardsdata[index].rating
              } <i className="fa-solid fa-star"></i>
            </p>
            <br />
            <p>
              
              <strong>Order review: </strong>
              {Cardsdata[index].somedata}
            </p>
            <br />
            <p> <strong >

             Remove 
            </strong>
             <i className="fa-solid fa-trash" style={{color:"#ef0b0b", margin:" 10px"}}></i>
             </p>
          </div>
        </div>
        </div>
        <div className="dishCounterCenter">

          <div className="dishCounter" >
            <i className="fa-solid fa-plus" onClick={increaseCount} style={{margin: "0px 15px"}}></i>
            {counts.count}
            <i className="fa-solid fa-minus" onClick={reduceCount} style={{margin: "0px 15px"}}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
