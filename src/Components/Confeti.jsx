
import React,{useState,useEffect} from "react";
import ReactConfetti from 'react-confetti';
const Confeti = () => {
  return (
	<div>
	<ReactConfetti
width={1350}

style={{position:"absolute", left:"-500px",top:"-232px"}}/> 
	</div>
  );
}

export default Confeti;


