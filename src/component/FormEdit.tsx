import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { User } from "../dto/User.model";
import { environment } from "../envirenment/envirenment";
import { urluserList } from "./UserList";


const FormEdit =({datauser}:any)=>{
    const navigate = useNavigate();
    console.log(datauser)
    const { register, handleSubmit} = useForm( 
        { defaultValues:datauser }
    );
    const updateUser=async(user:User)=>{
        await axios.put(environment.apiUrl+'/users/'+user.id,user).then(
            response=> navigate(urluserList)
        )

    }
     const onSubmit=(dataFrome:User)=>{
          updateUser(dataFrome);
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
                    <div  > <button type="submit"  className="btn btn-primary mt-5 " > edit </button></div>

                    </div>
                    
                </form>

            </div></>
    )
}
export default FormEdit;