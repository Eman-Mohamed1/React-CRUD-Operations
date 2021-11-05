import {Card, Container, Form} from "react-bootstrap";
import {useFormik} from "formik";
import {useSelector,useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import Header from "../../../utils/header";
import {ValidationSchema,initialValues} from "../../../utils/yupSchema";
import FormBtn from "./button";
import FormGroup from "./formGroup";
import { userAddition } from '../../../redux/userActions';
import User from "../../../data/model/user";
import  UserCache from '../../../data/cache/userCache';

const AddForm=()=>{
    let history=useHistory()
    const data =useSelector( (state) => state.data);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:initialValues ,
        validationSchema: ValidationSchema,
        async onSubmit(values) {
        dispatch(userAddition(values));
        const user = new User(values);
        UserCache.getInstance().saveUser(user);
        history.push('/')
    },
});

return(
<Container>
    <Form className={"mt-4"}  onSubmit={formik.handleSubmit}>
        <Card>
            <Header>Add-user</Header>     
            <Card.Body>
                <FormGroup  formik={formik.getFieldProps("username")} text={'user name'} htmlFor={"username"} placeholder={"username"} id={"username"} type={"text"} name={"username"} condition={formik.errors.username }/>
                <FormGroup  formik={formik.getFieldProps("email")} text={'Email Address'} htmlFor={"email"} placeholder={"Email Address"} id={"email"} type={"email"} name={"email"} condition={formik.errors.email }/>
                <FormBtn formik={formik.submitForm} text={'add'}/>
            </Card.Body>
        </Card>
    </Form>
</Container>
)
}
export default AddForm;