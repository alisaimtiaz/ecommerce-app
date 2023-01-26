import { Link } from '@material-ui/core';
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

import ReactDOM from 'react-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

<Route path="/Home" component={Home} /> 

import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}

`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#eee"})}

`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>walk.</Logo>
            <Desc>
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Error ratione tempore nam, mollitia placeat 
                accusamus delectus commodi fugiat ad qui magnam 
                soluta! Sit, odit deserunt atque sequi porro maiores aut.
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Links</Title>
            <List>
                <ListItem><a href="/Home">Home</a></ListItem>
                <ListItem><a href="/Cart">Cart</a></ListItem>
                <ListItem><a href="/Register">Register</a></ListItem>
                <ListItem><a href="/Login">Sign In</a></ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>1234 Address</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>555 555 5555</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>email@email.com</ContactItem>
            <Payment src="https://www.freepnglogos.com/uploads/cards-png/cards-websites-for-photographers-and-artists-photography-and-40.png"/>
        </Right>
    </Container>
  )
};

export default Footer