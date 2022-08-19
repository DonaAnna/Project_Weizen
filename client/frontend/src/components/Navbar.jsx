import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import {useDispatch,useSelector} from 'react-redux';
import { logout } from '../redux/userRedux';
import {useNavigate} from 'react-router-dom';

//For Styling Elements styled-components library is used
const Container = styled.div` 
    height:60px;
    ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({padding:"10px 0px"})}

`;

//Left Side
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({ display:"none" })}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;

const Input = styled.input`
border:none;
${mobile({width:"50px"})}

`;
//Center side
const Center = styled.div`
flex:1;
text-align:center;
`;
const Logo = styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}

`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`

//Right side
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;

const Select = styled.select`
padding:10px;
margin-right:20px;
border: none;
`;
const Option = styled.option``;


const Navbar = () => {
  const user = useSelector((state)=>state.user.currentUser);


  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleLogout = (e) =>{
    e.preventDefault();
    dispatch(logout())
  }
  

  return (
    <Container>
          <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input/>         
            <SearchIcon style={{color:'grey',fontSize:'16px'}}/>
            </SearchContainer>
          </Left>

          <Center><Logo>WEIZEN MART</Logo></Center>

          <Right>
            <MenuItem>
            <Link style={{textDecoration:'none',color:"black"}} to="/register">REGISTER</Link>
            </MenuItem>
            <MenuItem>
            <Link style={{textDecoration:'none',color:"black"}} to="/login">LOGIN</Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>{user && "LOGOUT"}{!user && navigate ("/login" )}</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon/></Badge>
          </MenuItem>
          </Right>
          </Wrapper>  
    </Container>
  );
};

export default Navbar;