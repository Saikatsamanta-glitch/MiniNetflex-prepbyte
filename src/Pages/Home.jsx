import React,{useState} from 'react';
import Card from '../component/Card'
import { movie_Data } from '../data';
import {Link} from 'react-router-dom';
// useState---> re render that component
/*
map, filter and reduce
*/ 
// looping

export default function() {
    const [name,setname]=useState("");

    const printing=(e)=>{
        setname(e.target.value);
    }
    return (
<div className="home">

<div className='container mt-3'>
  <div className='row d-flex justify-content-center'>
  <input className='w-50' type='text' onChange={ (event)=>{ printing(event) } } />
  </div>
</div>



        <div className='container mt-5 cards_container'>
{

        movie_Data.map(( val,i )=>{
            if(((val.name).toLowerCase()).includes((name).toLowerCase())){
                return (
                 <Card name={val.name} time={val.time} img={val.img} desc={val.description} profile={val.profile_img} key={i} />  
            )
            }
            
        })
}     
        </div>
        </div>
    )
    
}
//  <Card name="Avenger: End game" time="2"/> 
//                 <Card name="Shamshera" time="2"/> 
//                 <Card name="Thor love and thunder" time="2"/> 
//                 <Card name="Man vs Bee" time="2"/> 
//                 <Card name="Bhramastra" time="2"/> 