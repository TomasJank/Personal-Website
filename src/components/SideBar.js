import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import { Link as ScrollerLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function SideBar() {
    return <ProductConsumer>
        {value=>{
            const {links,sidebarOpen, handleSidebar} = value;
            return <SideWrapper show={sidebarOpen}>
                <ul>
                    {links.map(link=>{
                        return (
                            
<ScrollerLink activeClass="active" to={link.scrollname} spy={true} offset={-80} smooth={true} duration={250}><li className="sidebar-link" key={link.id} >{link.text}</li> </ScrollerLink>  
                        )   
                    })}
                </ul>


            </SideWrapper>
        }}
    </ProductConsumer>
}


const SideWrapper = styled.nav`
position: fixed;
top: 50px;
display:flex;
justify-content:center;
text-align:center;
align-items:center;
width: 100%;
height: 30%;
background: var(--mainGrey);
z-index: 3;
border-right: 4px solid var(--primaryColor);
transition: var(--mainTransition);
transform: ${props=> props.show?'translateX(0)':'translateY(-100%)'};

ul{
    list-style-type: none;
    padding: 0 !important;
}

.sidebar-link{
    display:block;
    font-size:1.2rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background:transparent;
    transition: var(--mainTransition);
}

.sidebar-link:hover{
cursor: pointer;
}

.sidebar-link:hover{
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
}

@media (min-width:576px){
    width:20rem;
}


`