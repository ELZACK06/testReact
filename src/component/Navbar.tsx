import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { urluserAdd } from "./UserAdd";
import { urluserList } from "./UserList";

const Navbar =()=>{
  const navigate = useNavigate()
  const[pathUrl,setpathUrl]=useState('')
  const location = useLocation();
  const useBtn=pathUrl===urluserList?<button  className="btn btn-outline-success mt-3 mb-3 " type="button" onClick={()=>{navigate(urluserAdd)}}>add user</button>: 
  <button  className="btn btn-outline-primary mt-3 mb-3"  type="button" onClick={()=>{navigate(urluserList)}}>consult users</button>
  useEffect(()=>{
    setpathUrl(location.pathname)
  })
  
    return(
      <>
        <nav className="bg-light mb-3" >
            <form   >
                <div className="col-md-12 ">{useBtn}</div>
            </form>
         </nav>
       </>
    )
}


export default Navbar;