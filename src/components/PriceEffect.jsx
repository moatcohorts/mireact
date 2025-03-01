import { useEffect } from 'react';
import { useState } from 'react';


export default function PriceEffect({totalvisit}) {
    const [price, setPrice] = useState(0);
    const [proposedPrice, setProposedPrice] = useState(price);
    const [extposts, setExtPosts] = useState([]);
    const [errormsg,setErrorMsg] = useState(false);
    const [loader,setLoader] = useState(true);
    
    let handleSubmitForm = ()=>{
        setPrice(proposedPrice);
    }
    let testFunction=()=>{
        console.log('I will run anytime I am triggered. What triggers me? whenever any of the specified useEffect dependencies(price or totalvisit) changes. current price is '+ price +' and total visit is '+ totalvisit);
    }
    let fetchPosts = ()=>{
        fetch("https://dummyjson.com/posts")
        .then((response) => {
        return response.json()
        })
        .then((data) => {
        // Work with JSON data here
            //console.log(data.posts)
            setExtPosts(data.posts)
            setLoader(false);
            setErrorMsg(false);
        })
        .catch((err) => {
            setErrorMsg(err.message);
            setLoader(false);
            setExtPosts([])
        // Do something for an error here
        // console.log(err)
        // setExtPosts([{title:'Ooops',body:'We lost the connection!'+err.message}])
        })
    }
      useEffect(() => {
       // testFunction();
        fetchPosts()
      },[extposts]);//[price,totalvisit]
      let allposts = extposts.map(function(value, key){
        return <div key={key} className='mb-3 border-bottom'>
        <h4>{value.title}</h4>
        <p>{value.body}</p>
    </div>
      })
      return <>
      <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <h3 align='center'>Posts from External Sites</h3>
                <hr/>
                {loader && <div className='text-center'><div className="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>}
{errormsg && <div className='alert alert-danger'>
    {errormsg}
    </div>}
                {extposts && allposts}
            </div>
      </div>
      
      <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <h3 className='mb-4' align='center'>Subscription Price for Readers {proposedPrice}</h3>
                    {/* <div className='mb-3 row'>
                        <label className='col-md-3'>Enter Price</label>
                        <div className='col-md-5'>
<input type='text' className='form-control form-control-lg border-danger' placeholder='Enter the amount you have' onChange={(event)=>{
    setProposedPrice(event.target.value)
}}/>
                        </div>   
                        <button className='btn btn-primary col-md-4' onClick={handleSubmitForm}>Propose Price</button>                    
                    </div> */}
                  
                   <div className='mb-3'>
                   <button className='btn btn-outline-primary col-12' onClick={()=>{ setPrice(price +1); }}>Click Me to Increase Price by 1</button>
                   </div>
            </div>
      </div>
      </> ;
    
}