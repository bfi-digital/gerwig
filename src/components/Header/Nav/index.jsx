import React from "react"
import { Link } from "@reach/router"
import theme from "../../_theme"
import styled from "styled-components"

const Outer = styled.nav`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: block;
        margin-right: auto;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px;
`

const Item = styled.li`
    font-weight: bold;
    font-size: 0.9rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1rem;
    }
`

const ItemLink = styled(Link)`
    display: block;
    padding: 20px 15px;
    color: ${theme.charcoal};
    text-decoration: none;
    position: relative;
    &:after{
        position: absolute;
        left: 15px;
        right: 15px;
        bottom: 15px;
        display: block;
        content: "";
        border-bottom: ${props => props.active ? `2px solid ${theme.charcoal}` : ""};
        @media screen and (min-width: ${theme.l}){
            bottom: 17px;
        }
    }
    &:before{
        display: block;
        content: "";
        position: absolute;
        margin: 0 auto;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 0; 
        height: 0; 
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid ${props => props.hovered ? theme.grey : "transparent"};
    }
`

const ChildBar = styled.div`
    @keyframes fadeIn{
        from{
            transform: translateY(-100%);
            opacity: 0;
        }
        to{
            transform: translateY(0%);
            opacity: 1;
        }
    }
    position: absolute;
    background: ${theme.grey};
    top: 60px;
    left: 0;
    width: 100%;
    z-index: -1;
    animation: fadeIn 0.2s ease-out;
`

const ChildList = styled.ul`
    padding: 15px;
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    &:hover a{
        color: ${theme.darkGrey}
    }
`

const ChildItem = styled.li`
    display: inline-block;
    margin-right: 15px;
`

const ChildLink = styled(Link)`
    color: ${theme.charcoal};
    text-decoration: none;
    &:hover{
        color: ${theme.charcoal} !important;
    }
`

const Nav = ({
    navItems,
    selected,
    setSelected
}) => {

    return(
        <Outer>
            <List>
                {navItems.map((navItem, i) =>
                    <Item 
                        key={i}
                        onMouseEnter={() => setSelected(i)}
                    >
                        <ItemLink 
                            to={navItem.url} 
                            active={navItem.active}
                            hovered={selected === i}
                        >
                            {navItem.title}
                        </ItemLink>
                        <ChildBar>
                            {selected === i &&
                                <ChildList id={i}>
                                    {navItem.children.map((child, j) =>
                                        <ChildItem key={j}>
                                            <ChildLink to={child.url}>
                                                {child.title}
                                            </ChildLink>
                                        </ChildItem>
                                    )}
                                </ChildList>
                            }
                        </ChildBar>
                    </Item>
                )}
            </List>
        </Outer>
    )
}

export default Nav