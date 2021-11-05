import * as Yup from "yup";

export const  initialValues= {
    username: "",
    email: ""
}


export const  ValidationSchema =
    Yup.object().shape({ 
    username: Yup.string()
        .min(5, "Min length 6 characters")
        .required("Please enter username"),
    email: Yup.string().email().required()

})




