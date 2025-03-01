import { useContext } from 'react';
import { useState } from 'react';

import Preview1 from "./Preview1"
import { AuthorContext } from './AuthorContext';


export default function Posts({contents}){
  const [count,setCount] = useState(0) //creates state variable 'count'
  const {name,version, fxn}= useContext(AuthorContext);
  
  function likePage(){
    setCount(count + 1);// you can not change count directly, but by calling setCount, you can pass the new/next value you want to assign to count.
  }
 
    let articles = contents.map(function(value,key){
      return  <div className="post-preview" key={key}>
      <a href="#">
        <h2 className="post-title">
         {value.title}
        </h2> 
        <h3 className="post-subtitle">
        {value.content}
          </h3>
      </a>
      <p className="post-meta">
        Posted by
        <a href="#!" onClick={fxn}> {name} </a>
        on September 24, 2023 Version: {version}
      </p>
      <hr className="my-4" />
    </div>
    })
    return <>
    <div className="row gx-4 gx-lg-5 justify-content-center">
    <div className="col-md-10 col-lg-8 col-xl-7">     
      {articles}     
      
      <Preview1/> 

      <hr className="my-4" /> 
      <div className="d-flex justify-content-end mb-4">
        
        <button className="btn btn-danger text-uppercase" onClick={likePage}>
          {count} <i className="fa-solid fa-thumbs-up"></i>
        </button>
        
      </div>
    </div>
  </div></>
}