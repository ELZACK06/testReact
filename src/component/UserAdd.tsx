import axios from "axios";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { User } from "../dto/User.model";
import { environment } from "../envirenment/envirenment";
import { urluserList } from "./UserList";
export  const urluserAdd="/user-add";


const UserAdd =()=>{
    const navigate = useNavigate()
  
    const { register, handleSubmit} = useForm({ shouldUseNativeValidation: true });
    const useradd = async(dataFrome:User)=>{
         await axios.post(environment.apiUrl+'/users',dataFrome).then(response=>navigate(urluserList))
  
    }
   const onSubmit= async (dataFrome:any)=>{
   
    useradd(dataFrome);
   

      
   }
   
    return(
       
          <>
            <div className="container mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <form>
                    <div className="form-group">
                    <label   htmlFor="emailFrom"  >Email address</label>
                    <input type="email" className="form-control" id="emailForm" placeholder="name@example.com"  {...register("email",{required:"email is Required"})}/>
                    <label htmlFor="nameForm">name</label>
                    <input type="text" className="form-control" id="nameForm" {...register("name",{required:"name is Required"})} />
                    <label htmlFor="lastNameForm">last name</label>
                    <input type="text" className="form-control" id="lastNameForm" {...register("lastname",{required:"lastname is Required"})}/>
                    <label htmlFor="TelForm">tel</label>
                    <input type="text" className="form-control" id="TelForm"  {...register("tel",{required:"tel is Required"})}/>
                    <div  > <button type="submit"  className="btn btn-success mt-5 " > add </button></div>

                    </div>
                    
                </form>

            </div>
          </>
        
      
       
    );
}
export default UserAdd;