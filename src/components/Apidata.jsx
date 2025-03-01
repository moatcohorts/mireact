import { useState } from 'react';

let Apidata = ({apiFxn})=>{
    const [myposts,setMyposts] = useState([{id:'34444',title:"Initial"}])
    let displaydata = myposts.map(function(value,key){
        return <li key={key}>{value.title}</li>;
    });

    function handleClick(){
        let data = apiFxn();
        setMyposts(data);
    }

    return <div className="container">
        <div className="row justify-content-center">
            <div className='col-12'>
                <ul>
                    {displaydata}
                </ul>
            </div>
            <div className="col-md-4">
                <button className="btn btn-success col-12" onClick={handleClick}>Load Data</button>
            </div>
        </div>
    </div>
}

export default Apidata;