// import React from 'react'
function Validation(values) {
    let errors={};
        if( " "){
         errors.fullname="Please fill this. The name is required"
        }
        if(!values.email){
            errors.email="Please fill this. The email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(values.email)){
            errors.errors="Please fill this. The email is invalid"
        }
        if(!values.password){
            errors.password="Please fill this. The password is required"
        }
        else if(values.password.length<2){
            errors.password="The password must have more that 2 characters"
        }
    return errors;
}

export default Validation
