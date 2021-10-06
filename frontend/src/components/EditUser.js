import React from 'react'
import Signup from './Signup';
function EditUser({uid,fullname,email,password}) {
  Signup.child(uid).set({
      fullname,
      email,
      password
  }).then(data=>{
      return true;
  }).catch(()=>{
      return false
  });
};

export default EditUser
