import styled from 'styled-components';
import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Container = styled.div``;

const Wrapper = styled.div`
padding:50px;
display:flex;
`;

const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img`
`;

const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`;

const Title = styled.h1`
font-weight:200;
`;

const Desc = styled.p`
margin:20px 0px;
`;

const Price = styled.span`
font-weight:100;
font-size:40px;
`;

const Quantity = styled.div`
margin:5px 0px;
font-weight:100;
font-size:40px;
`;

const FilterContainer = styled.div`
width:60%;
margin:30px 0px;
display:flex;
justify-content:space-between;
`;

const Filter = styled.div`
display:flex;
align-items:center;
`;

const FilterTitle = styled.div`
font-size:20px;
font-weight:200;
margin:0px 0px 0px 10px;

`;

const FilterState = styled.select`
margin-left:10px;
padding:5px;

`;

const FilterStateOption = styled.option``;

const FilterPrice = styled.select`
margin-left:10px;
padding:5px;
`;

const FilterPriceOption = styled.option``;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`;

const AmountContainer = styled.div `
display:flex;
align-items:center;
font-weight:700;
`;

const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid gold;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;

const Button = styled.button`
padding:15px;
border:2px solid gold;
background-color:white;
cursor:pointer;
font-weight:600;


&:hover{
    background-color:#ffd678;
}
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://th.bing.com/th/id/OIP.cx-dOm5q_E8G8zO6e9HD0QHaFj?pid=ImgDet&rs=1"/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Emmer Wheat
                </Title>
                <Desc>Emmer (Triticum dicoccum) is a member of the wheat family of annual grasses.
                    Emmer is also called starch wheat, rice wheat, or two-grained spelt.
                    Emmer is rich in fiber, protein, magnesium, and other vitamins. 
                    It is a complete protein source when combined with legumes, which makes it 
                    an excellent addition to a vegetarian diet or for anyone looking for a plant-based high-protein food source.</Desc>
                <Quantity>80KG</Quantity>
                <Price>Rs.11,000/Quintel</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>State</FilterTitle>
                        <FilterState>
                            <FilterStateOption>Haryana</FilterStateOption>
                            <FilterStateOption>Rajasthan</FilterStateOption>
                            <FilterStateOption>Bihar</FilterStateOption>
                            <FilterStateOption>Gujarat</FilterStateOption>
                            <FilterStateOption>Punjab</FilterStateOption>
                        </FilterState>
                    </Filter>

                    <Filter>
                        <FilterTitle>Price</FilterTitle>
                        <FilterPrice>
                            <FilterPriceOption>Price(asc)</FilterPriceOption>
                            <FilterPriceOption>Price(desc)</FilterPriceOption>
                        </FilterPrice>
                    </Filter>

                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon/>
                        <Amount>1</Amount>
                        <AddIcon/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product;