
import axios from "axios";
import { useState } from "react";

import { useParams } from "react-router-dom";


import { environment } from "../envirenment/envirenment";
import FormEdit from "./FormEdit";

export const urluseredit = '/user-edit';

const UserEdit=()=>{
  
   const [user,setuser]=useState(null);
    const {id} = useParams();
    const getUserSelected=async(id:any)=>{
        const {data} = await axios.get(environment.apiUrl+"/users/"+id);
        setuser(data);
     

      }
    
    useState(()=>{
        getUserSelected(id)
    })
    
    
   
   
   
    return(
        <>
           {user ?<FormEdit datauser={user}/>:<div>looding</div>}
        </>
    )
}

export default UserEdit;