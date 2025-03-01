import { useState } from "react";
export default function Ads(){
    /*set state variables for the input elements*/
    const [fullName,setFullName] = useState('');    
    const [propName,setPropName] = useState('');
    const [message,setMessage] = useState('');
    
    /* set state variable to store the feedback*/
    const [feedback,setFeedback] = useState('');  

    const handleSubmit = (event)=>{
        event.preventDefault(); 
        setFeedback('loading... please wait...') 
        /** construct the data that will be sent to the backend */
        const data2send = {
            hotel_name:propName,
            hotel_contact:fullName,
            hotel_pix:"https://picsum.photos/200/",
            hotel_price:15000
        }
            
        const requestOptions = {
            mode:'no-cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data2send)
        }

        fetch('http://localhost/property/api/v1/create.php', requestOptions)
        .then(response => {
            if (response.type === "opaque") { 
              setFeedback("Form submitted but Response is opaque or body is null.")
              return null;
            }
            return response.json();  
        })
        .then(data => {
            if (data) {
                console.log("Data received",data);
            }
            /* clear the form */  
            setMessage('');
            setFullName('');
            setPropName('');
        })
        .catch(error=>{
            console.log(error.message);
        }) 
    }
   
    return <>
    <div className="row">
        <div className="col-md-6 offset-md-3">
        <form method='post' onSubmit={handleSubmit}>
            <h4>Sponsored Ads:</h4>
            <p> Fill this form if you have a property for lease</p>
            <hr/>
            <div>{feedback}</div>
            <div className="mb-3">
                <label>Your Fullname</label>
                <input type="text" className="form-control border-dark" name="fullname" value={fullName} onChange={(event)=>{ setFullName(event.target.value)}}/>
            </div>
            <div className="mb-3">
                <label>Property Name</label>
                <input type="text" className="form-control border-dark" name="propname" value={propName} onChange={(event)=>{ setPropName(event.target.value)}}/>
            </div>
            <div className="mb-3">
                <label>Any other Message</label>
                <textarea  className="form-control border-dark" name="message" value={message} onChange={(event)=>{ setMessage(event.target.value)}}></textarea>
            </div>
            <div className="mb-3">
                <button className="btn btn-danger col-6 offset-3">Submit</button>
            </div>
        </form>
    </div>
    </div>
    </>
}