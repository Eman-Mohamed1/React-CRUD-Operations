import {Card, Container, Form} from "react-bootstrap";
import {useFormik} from "formik";
import User from "../../../data/model/user";
import  UserCache from '../../../data/cache/userCache'
import Header from "../../../utils/header";
import {useSelector,useDispatch } from 'react-redux';
import {userUpdate} from '../../../redux/userActions';
import {ValidationSchema,initialValues} from "../../../utils/yupSchema";
import { useParams } from "react-router-dom";
import FormBtn from "./button";
import FormGroup  from "./formGroup";
import {useHistory} from "react-router";
import { useEffect,useState } from "react";

const UpdateForm=()=>{
    let history=useHistory()
    const dispatch = useDispatch();
    const params = useParams();
    const id =params.id*1
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
// const [ID, setID] = useState(null);


    useEffect( () => {
    const userCashed= UserCache.getInstance().getUser();
    //  console.log(' userCashed', userCashed)
            setusername(userCashed.username);
            setemail(userCashed.email);
    },[] )


// const data =useSelector( (state) => state.data);
// const user=data.filter((item)=>item.id===id)
    const formik = useFormik({
        validateOnBlur: false,
        initialValues:initialValues,
        validationSchema: ValidationSchema,
        async onSubmit(values) {
            dispatch(userUpdate(values,id));
            const user = new User(values);
            UserCache.getInstance().saveUser(user);
            history.push("/");
        }
    });

return (
    <Container>
        <Form className={"mt-4"}  onSubmit={formik.handleSubmit}>
            <Card>
            <Header>update-user</Header>    
                <Card.Body>
                {/* <FormGroup  formik={formik.getFieldProps("username")} text={'user name'} htmlFor={"username"} placeholder={user[0].username} id={"username"} type={"text"} name={"username"} condition={formik.errors.username }/>
                <FormGroup  formik={formik.getFieldProps("email")} text={'Email Address'} htmlFor={"email"} placeholder={user[0].email} id={"email"} type={"email"} name={"email"} condition={formik.errors.email }/> */}
                <FormGroup formik={formik.getFieldProps("username")} text={'user name'} htmlFor={"username"} placeholder={username} id={"username"} type={"text"} name={"username"} condition={formik.errors.username }/>
                <FormGroup formik={formik.getFieldProps("email")} text={'Email Address'} htmlFor={"email"} placeholder={email} id={"email"} type={"email"} name={"email"} condition={formik.errors.email }/>
                <FormBtn formik={formik.submitForm} text={'update'}/>
                </Card.Body>
            </Card>
        </Form>
    </Container>
)    
}
export default UpdateForm;