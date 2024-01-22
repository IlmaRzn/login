import { auth } from '../../firebase';

import { Card, CardContent, Input, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {  createUserWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';



const SignUp = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')

const handleSignUp= (e) =>{
  e.preventDefault()
  
   
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
     const user = userCredential.user
     console.log('user created',user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage =error.message
      console.log('signup error',errorCode,errorMessage)
    })
  }
  return (
  <div className="bg-black  h-screen flex items-center justify-center"> 

  <Card className=' '>
    <CardContent>
      <form onSubmit={handleSignUp} >
      <Typography className='font-bold text-black mb-5'>Create Account</Typography>
      <div className='grid grid-1 gap-5 mb-5'>
      <Input
      placeholder='Email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className='bg-white'
      />
      <Input
      placeholder='Password'
      value={password}
      onChange={(e)=>setPassword (e.target.value)}
      className='bg-white'
      />
      </div>
      <Button type='submit'>SignUp</Button>
      <Button type='reset'>Reset</Button>
      </form>
    </CardContent>
  </Card>
 

  </div>
  )
}

export default SignUp