import { useState } from "react";
export default function Contact(){
    const [fullName,setFullName] = useState('');    
    const [propName,setPropName] = useState('');
    const [message,setMessage] = useState('');
    const [feedback,setFeedback] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        // console.log(fullName);
        // console.log(message);
        //send data to 
        const data2send = {hotel_name:message,hotel_contact:fullName,hotel_pix:"https://picsum.photos/200/",hotel_price:15000}
            
        
        const requestOptions = {
            mode: 'no-cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data2send)
        }

        fetch('http://localhost/property/api/v1/create.php', requestOptions)
        .then(response =>{
            if (!response.ok) {
                // throw new Error(`HTTP error! Status: ${response.status}`);
                console.log(response);
                return {"some":"hhh"}
                
            }else{
                return response.json();
            }
            
        }) 
        .then(data => { 
            console.log(data) ;  
            setMessage('');
            setFullName('');
            setFeedback("Form submitted!")
        })
        .catch(error=>{console.log(error)})  

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