import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
),
url("https://blog.fhyzics.net/hubfs/wheat-1.png#keepProtocol")no-repeat center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper = styled.div`
width:30%;
padding:20px;
background-color:white;
`;

const Form = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
`;

const Input = styled.input`
flex-1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;
`;

const Button = styled.button`
width:100%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;

const Error =styled.span`
color:red;
padding:5px;
`;

const Register = () => {

    const [firstName,setFirstname] = useState("")
    const [lastName,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confmPassword,confirmPassword] = useState("")
    const [error,setError] = useState(false)
    const [fnameErr,setFNameErr] = useState(false)
    const [lnameErr,setLNameErr] = useState(false)
    const [phoneErr,setPhoneErr] = useState(false)
    const [usernameErr,setUsernameErr] = useState(false)
    const [pwdErr,setPwdErr] = useState(false)
    const [confmPwdErr,setConfmPwdErr] = useState(false)


    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        
        try{
        const res = await axios.post("http://localhost:5000/api/auth/register",{
            firstName,
            lastName,
            email,
            phone,
            username,
            password,
        });
        res.data && window.location.replace("/login");
        console.log(res)
    }catch(err){
        console.log(err)
        setError(true);
    }
    };

const handleFirstName = (e1)=>{
    if(firstName.match(/^[A-Za-z]+$/)){
        console.log("Accepted")
    }
   else{
    setFNameErr(true)
   }
}

const handleLastName = (e1)=>{
    if(lastName.match(/^[A-Za-z]+$/)){
        console.log("Accepted")
    }
   else{
    setLNameErr(true)
   }
}
const handlePhone = (e1)=>{
    if(phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
        console.log("Accepted")
    }
   else{
    setPhoneErr(true)
   }
}
const handleUsername = (e1)=>{
    if(username.match(/^[a-zA-Z0-9_-]{4,16}$/)){
        console.log("Accepted")
    }
   else{
    setUsernameErr(true)
   }
}
const handlePassword = (e1)=>{
    if(password.match(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/)){
        console.log("Accepted")
    }
   else{
    setPwdErr(true)
   }
}
const handleConfirmPassword = (e)=>{
    confirmPassword(e.target.value);
    if(password != confirmPassword){
       setConfmPwdErr("Password does not match");
       //console.log("not matching")
    }
    else{
        setConfmPwdErr("");
        console.log("matching")
    }
}


  return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <form onSubmit={handleSubmit}>
                <Form >
                    
                    <Input 
                        type="text"
                        placeholder="First Name"
                        onChange={e=>setFirstname(e.target.value)}
                        onKeyUp={handleFirstName}
                        required
                        />
                     {fnameErr&&!firstName.match(/^[A-Za-z]+$/)?<Error>Please enter a valid name!</Error>:""}
        
                    <Input 
                        type="text"
                        placeholder="Last Name"
                        onChange={e=>setLastname(e.target.value)}
                        onKeyUp={handleLastName}
                        required
                        />
                     {lnameErr&&!lastName.match(/^[A-Za-z]+$/)?<Error>Please enter a valid name!</Error>:""}
                    <Input 
                        type="email"
                        placeholder="email"
                        onChange={e=>setEmail(e.target.value)}
                        required
                         />
                         
                    <Input 
                        type="tel"
                        placeholder="Phone"
                        onChange={e=>setPhone(e.target.value)}
                        onKeyUp={handlePhone}
                        required
                        />
                       {phoneErr&&!phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)?<Error>Please enter a valid phone number!</Error>:""}
                    <Input 
                        type="text"
                        placeholder="Username"
                        onChange={e=>setUsername(e.target.value)}
                        onKeyUp={handleUsername}
                        required
                        />
                        {usernameErr&&!username.match(/^[a-zA-Z0-9_-]{4,16}$/)?<Error>Please enter a valid username!</Error>:""}
                    <Input
                        type="password"
                        placeholder="Password"
                        onChange={e=>setPassword(e.target.value)}
                        onKeyUp={handlePassword}
                        required
                        />
                        {pwdErr&&!password.match(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/)?<Error>Please enter a strong password!</Error>:""}

                    <Input 
                        type="password"
                        placeholder="Confirm Password"
                        value={confmPassword}
                        onChange={(e)=>handleConfirmPassword(e)}
                        required
                        />
                        {confmPwdErr&&password!=confmPassword?<Error>Password does not match</Error>:""}
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">REGISTER</Button>
                    {error ? <Error>Please check the entered details!</Error>:""}
                </Form>
                </form>
                
            </Wrapper>
        </Container>
    );
};

export default Register;