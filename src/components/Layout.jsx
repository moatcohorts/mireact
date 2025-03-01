// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import image from '../assets/post-bg.jpg';
import Nav from './Nav'
import Header from './Header'
import Counter from './Counter'
import Posts from './Posts'
import Footer from './Footer'
import Ads from './Ads';
import Apidata from './Apidata';
import PostRequestComponent from './PostRequestComponent';
// import AxiosPostComponent from './AxiosPostComponent'

// import { useContext } from 'react';
import { AuthorContext } from './AuthorContext';
import PriceEffect from './PriceEffect';
 

let Layout=()=>{
  function fetchData(){
    fetch("https://dummyjson.com/posts")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      // Work with JSON data here
    // console.log(data)
      return data;
    })
    .catch((err) => {
      // Do something for an error here
    })

  }
  // const fetchUsers = async () => {
  //   const res = await fetch("https://dummyjson.com/posts");//await fetch("https://jsonplaceholder.typicode.com/users");
    
  //   //console.log(res.json());
  //   return res.json();
  // }
  function calculateScore(){
    alert('Hello');
  }
    let data ={name:"Moat Academy",version:"30.1", fxn:calculateScore}
    
    let totalvisit = 87; 

    let contents=[
        {"title":"Man must explore, and this is exploration at its greatest","content":"Problems look mighty small from 150 miles up"},
        {"title":"Science has not yet mastered prophecy","content":"We predict too much for the next year and yet far too little for the next ten."},
        {"title":"Failure is not an option","content":"Many say exploration is part of our destiny, but it's actually our duty to future generations."},
        ]
          
    return <>
      <AuthorContext.Provider value={data}> 
  {/* Navigation*/}
  <Nav/>
  {/* Page Header*/}
    <Header/>
  {/* Main Content*/}
  <PriceEffect totalvisit={totalvisit}/>
  <div className="container px-4 px-lg-5"> 
    <Counter total ={totalvisit} fxn = {calculateScore}  />
    <Posts contents={contents} author="Mark Zukerberg" />
  </div>
  {/* <Apidata apiFxn={fetchData} /> */}
  {/* <AxiosPostComponent/> */}
  <Ads/>
 {/* <PostRequestComponent/> */}
 <Footer />
 </AuthorContext.Provider>
</>
}
export default Layout