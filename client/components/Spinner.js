import {useState,useEffect} from 'react'
import { useNavigate ,useLocation } from 'react-router-dom'
const Spinner = ({path="login"} ) => {
    const [count,setCount]=useState(3);
    const navigate= useNavigate();
    const location =useLocation();


    useEffect(()=>{
      const interval = setInterval(()=>{
         setCount((prevValue) =>prevValue-1);
      },1000);
      return () => clearInterval(interval);
}, [count]); // Remove count dependency

useEffect(() => {
 if (count === 0) {
   navigate(`${path}`, {
     state: location.pathname,
   });
 }
}, [count, navigate, location,path]); // Monitor count change
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center"
       style={{height:"100vh"}}>
        <h1 className='text-centerr'>redirecting to you in {count} seconds</h1>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>

    </>
  )
}

export default Spinner
