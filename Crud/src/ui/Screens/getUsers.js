import {RiDeleteBin6Line} from 'react-icons/ri';
import {BsPencilSquare}from 'react-icons/bs';
import {useEffect} from "react";
import DataTable from "react-data-table-component";
import User from "../../data/model/user";
import UserCache from '../../data/cache/userCache';
import Header from '../../utils/header';
import {useSelector,useDispatch } from 'react-redux';
import { userList, userDeletion } from '../../redux/userActions';
import { Link } from 'react-router-dom';
import FormBtn from "../components/Forms/button";

function UsersList() {
    const data =useSelector( (state) => state.data);
    const isPending =useSelector( (state) => state.isPending);
    const error =useSelector( (state) => state.error); 
    const dispatch = useDispatch();    

//get users
  const getUsers = async () => {
  // UserCache.getInstance().hasUser() ? UserCache.getInstance().getUser():
  await dispatch(userList());
  
}
for (let i=0;i<data.length;i++){
  const user =new User(data[i]);
  UserCache.getInstance().saveUser(user);
}

//cash user 
// const user =new User(data);
// UserCache.getInstance().saveUser(user);

//delete user
const handleDelete = async (ID) => {
await dispatch(userDeletion(ID))
UserCache.getInstance().clearCache() ; 
getUsers()
}

//data table
const tableColumns = [
    {
      name: 'Usernme',
      selector: "username",
      sortable: true,
      center: true,
    },
    {
      name: `Email`,
      selector: "email",
      sortable: true,
      center: true,
    },
    {
      cell: (row) => {
        return (
          <div style={{fontSize:25}}>

            <span>
              <RiDeleteBin6Line 
              onClick= {()=>{handleDelete(`${row.id}`)}}/>
            </span>

            <span style={{marginLeft:30}}   >
              <Link to={`/user/${row.id}`}style={{textDecoration:'none',color:'black'}}>  <BsPencilSquare /></Link>
            </span>

          </div>
        );
      },
    },
];

useEffect(() => {
  setTimeout(getUsers(),5000) 
},[]);

return (
              <>
            <Header>
            Users-List
            </Header>
            { isPending && <h4 style={{textAlign:'center'}}>Loading .....</h4> }
            { error && <div>{ error }</div> }
            {data &&  <DataTable
            data={data}
            columns={tableColumns}/>}
            {<Link to={'./user'}> <FormBtn text={'add user'}/></Link>}
              </>
)}


export default UsersList;

