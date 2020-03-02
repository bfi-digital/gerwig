import styled from "styled-components"
import theme from "../_theme"

export const Wrapper = styled.div`
    max-width: ${theme.l};
    margin: 0 auto;
    padding: 40px ${theme.horizontalPadding};
    @media screen and (min-width: ${theme.m}){
        display: flex;
        flex-direction: row;
    }
    @media screen and (min-width: ${theme.xl + 200}){
        max-width: ${theme.xl};
        padding: 70px ${theme.horizontalPadding};
    }
`

export const MainContent = styled.article`
    flex: 1;
`

export const UpperContent = styled.article`
    max-width: ${theme.l};
    margin: 0 auto;
    padding: 40px ${theme.horizontalPadding} 0 ${theme.horizontalPadding};
    @media screen and (min-width: ${theme.xl}){
        max-width: ${theme.xl};
        padding: 70px ${theme.horizontalPadding} 0 ${theme.horizontalPadding};
    }
`

export const Sidebar = styled.aside`
    padding-top: 25px;
    @media screen and (min-width: ${theme.m}){
        padding-top: ${props => props.leftSide ? "0" : "55px"};
        width: ${props => props.leftSide ? "25%" : "33%"};
        margin-left: ${props => props.leftSide ? "0px" : "70px"};
        margin-right: ${props => props.leftSide ? "70px" : "0px"};
    }
`