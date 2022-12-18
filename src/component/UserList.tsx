import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../dto/User.model";
import {environment} from "../envirenment/envirenment"
import  { urluseredit } from "./UserEdit";
export const urluserList:string="/user-list"
const UserList =()=>{
  const navigate = useNavigate()
  const [userlist,setuser]=useState([] as User[]);
  const fetchdata =async ()=> {
   const {data} = await axios.get(environment.apiUrl+"/users");
   setuser(data);   
}
  useEffect(() => {
    fetchdata();
   }, []);
  const deleteuser= async(id:number)=>{
    await axios.delete(environment.apiUrl+"/users/"+id).then((response)=>fetchdata());
  }
  return(<>
      <div className="container">
      <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">email</th>
                    <th scope="col">tel</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  
                  {userlist.map(user=><tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.tel}</td>
                    <td><button onClick={()=> deleteuser(user.id)} type="button" className="btn btn-danger " >delete</button>
                            <button style={{marginLeft:"0.3em"}} type="button" className="btn btn-danger ml-3" onClick={()=>{navigate(urluseredit+"/"+user.id)}} > update</button></td>
                  </tr>)}
                  
                 
                   
                </tbody>
              </table>

      </div>
  </>)
}
export default UserList;