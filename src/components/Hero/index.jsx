import React from "react"
import { Headline } from "../Headline"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const colorSchemes = [
    {
        background: "transparent"
    },
    {
        background: theme.dustyPink
    },
    {
        background: theme.racerGreen
    },
    {
        background: theme.deepNavy
    }
]

const Outer = styled.section`
    background: ${theme.charcoal};
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: ${props => props.fullHeight ? "80vh" : "450px"};
    display: flex;
    align-items: flex-end;
    @media screen and (min-width: ${theme.m}){
        align-items: "flex-end";
    }
    h1{
        color: ${theme.white};
        max-width: calc( 0.5 * ${theme.l});
        text-shadow: 0px 0px 30px ${theme.charcoal}50;
        margin-bottom: 50px;
    }
    @media screen and (min-width: ${theme.xl}){
        h1{
            max-width: calc( 0.5 * ${theme.xl})
            margin-bottom: 75px;
        }
    }
`
const InnerGradient = styled.div`
    background: ${props => colorSchemes[props.colorScheme].background};
    opacity: 0.6;
    background-image: linear-gradient(180deg, rgba(14,24,19,0.00) 0%, rgba(14,24,19,0.60) 80%);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
`

const Container = styled.div`
    max-width: ${theme.l};
    width: 100%;
    margin: 0 auto;
    padding: 0px ${theme.horizontalPadding};
    z-index: 1;

    @media screen and (min-width: ${theme.xl}){
        max-width: ${theme.xl};
    }
`

export const Hero = ({
    image,
    headline,
    fullHeight,
    colorScheme
}) =>
    <Outer fullHeight={fullHeight} image={image}>
        <InnerGradient  colorScheme={colorScheme} />
        <Container>
            <Headline level={0} text={headline}/>
        </Container>
    </Outer>


Hero.propTypes = {
    /** 
	 * Url to the image for the hero. 
	 **/
    image: PropTypes.string,
    /** 
	 * The text for the title which will be used as the H1 for this page/post.
	 **/
    headline: PropTypes.string,
    /** 
	 * A boolean to determine if the hero is set full width - defaulting to false, set it to true to have a taller hero.
	 **/
    fullHeight: PropTypes.bool,
    /** 
	 * A number to define which colour overlay the Hero should have, it defaults to none.
	 **/
    colorScheme: PropTypes.number
}

Hero.defaultProps = {
    fullHeight: false,
    colorScheme: 0
}