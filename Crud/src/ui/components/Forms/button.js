import {useSelector} from 'react-redux'
import {IfCondition} from "react-ifloop";
import {Button, Spinner} from "react-bootstrap";

const FormBtn=({formik,text})=>{
const isPending =useSelector( (state) => state.isPending);
return(
    <div style={{textAlign:'center'}} >
        <Button  style={{marginTop:20}} variant={"primary"}  size="lg"  onClick={formik} disabled={isPending}>{text}</Button>
        <IfCondition condition={isPending}>
            <div className={'mt-2'}>
                <Spinner animation="border" variant="success"/>
            </div>
        </IfCondition> 
    </div>
)
}
export default FormBtn