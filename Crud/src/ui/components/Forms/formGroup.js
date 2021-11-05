import { Form} from "react-bootstrap";
import {IfCondition} from "react-ifloop";

const FormGroup=({formik,htmlFor,placeholder,value,id,type,name,text,condition})=>{
return(
        <Form.Group>
                    <Form.Label className="col-sm-3 col-form-label"  htmlFor={htmlFor}>{text}</Form.Label>
                    <Form.Control placeholder={placeholder} value={value}  id={id} type={type} name={name}
                    {... formik}/>
                    <IfCondition condition={condition != null}>
                        <div style={{ color: "red" }}>{condition}</div>
                    </IfCondition>
        </Form.Group>
)
}
export default FormGroup;