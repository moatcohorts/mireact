
let Counter =({fxn,total})=>{   
    return <p align="center">  
        
        { total > 21 ? <button className="btn-outline-dark btn" onClick={fxn}>Heavy Traffic</button>: <button className="btn-outline-dark btn" onClick={fxn}>Moderate Traffic</button>}
      </p>   
}
export default Counter