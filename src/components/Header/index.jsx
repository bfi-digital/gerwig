import React, { useState, useEffect, useRef } from "react"
import theme from "../_theme"
import styled from "styled-components"
import PropTypes from "prop-types"
import { LinkSwitch as Link } from "../LinkSwitch"
import QuickLinks from "./QuickLinks"
import MobilePanel from "./MobilePanel"
import MenuButton from "./MenuButton"
import Nav from "./Nav"

import logo from "./logo-black.svg"
import logoWhite from "./logo-white.svg"
import LotteryLogo from "./lottery-logo.jsx"

const Outer = styled.header`
    background: ${props => props.isTransparent ? (!props.isSticky ? "transparent" : theme.white) : theme.white};
    border-bottom: 1px solid ${props => props.isTransparent ? "transparent" : theme.grey};
    margin-bottom: ${props => props.overlay ? "-175px" : "0px"};
    position: relative;
    z-index: 999;
    min-height: 60px;
    position: sticky;
    top: 0px;
    transition: 0.1s ease-out;
`

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width:  ${theme.l};
    margin: 0 auto;
    padding: 0px ${theme.horizontalPadding};
    @media screen and (min-width: ${theme.xl + 200}){
        max-width: ${theme.xl};
    }
    a, button {
        &:focus {
            border-radius: 7px;
            box-shadow: inset ${theme.dustyPink} 0px 0px 0px 4px;
            outline: none !important;
        }
    }
`

const Logo = styled.img`
    width: 75px;
`

const LotteryContainer = styled.div`
    display: none;
    svg {
        width: 100%;
        height: auto;
    }
    @media screen and (min-width: ${theme.m}){
        width: 80px;
        display: flex;
    }
`

const LogoLink = styled(Link)`
    padding: 6px 2px;
    z-index: 9999;
`

const MobileLogoLink = styled(Link)`
    padding: 6px 2px;
    display: block;
    @media screen and (min-width: ${theme.m}){
        display: none;
    }
    img {
        width: 46px;
    }
`


const TopSection = styled.div`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: block;
        background: ${props => props.isTransparent ? "transparent" : theme.white};
        padding-top: 15px;
        transition: 0.1s ease-out;
    }
`
const QuickLinksInner = styled(Inner)`
    position: relative;
`

export const Header = ({
    navItems,
    overlay
}) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(false)
    const [isSticky, setSticky] = useState(false)
    const ref = useRef(null)

    const handleScroll = () => {
        setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    return(
        <>
            
            <TopSection 
                isTransparent={overlay}>
                <Inner>
                    <LogoLink to="/">
                        <Logo src={overlay ? logoWhite : logo} alt="British Film Institute"/>
                    </LogoLink>
                </Inner>

                <QuickLinks 
                    Inner={QuickLinksInner} 
                    isOverlaid={overlay} 
                    isSticky={isSticky}
                />
            </TopSection>
            <Outer 
                ref={ref}
                onMouseLeave={() => {
                    setSelected(false)
                }}
                isTransparent={overlay}
                overlay={overlay}
                isSticky={isSticky}
            >
                <Inner>
                    <MobileLogoLink to="/">
                        <Logo src={overlay ? logoWhite : logo} alt="British Film Institute"/>
                    </MobileLogoLink>
                    <Nav
                        navItems={navItems}
                        selected={selected}
                        setSelected={setSelected}
                        isOverlaid={overlay}
                        isSticky={isSticky}
                    />
                    <MenuButton 
                        handleClick={() => setOpen(!open)}
                        open={open}
                    />
                    <LotteryContainer >
                        <LotteryLogo colourFill={overlay ? theme.white : theme.charcoal} />
                    </LotteryContainer>
                </Inner>
            </Outer>
            {open && <MobilePanel navItems={navItems} />}
        </>
    )
}

Header.propTypes = {
    /** 
	 * An array of all the navigation items on the BFI website. Each element of the array contains a top level pillar with a `title` and a `url` field and a `children` array, containing all the sub pages of this pillar which also have a `title` and `url field. 
	 **/
    navItems: PropTypes.array,
    /** 
	 * A boolean to determine if the header is set to opaque or transparent - defaulting to false, it should only be set to true if the page/post contains a hero element.
	 **/
    overlay: PropTypes.bool
}

Header.defaultProps = {
    overlay: false
}