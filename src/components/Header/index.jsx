import React, { useState, useEffect, useRef } from "react"
import theme from "../_theme"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "@reach/router"
import Search from "./Search"
import QuickLinks from "./QuickLinks"
import MobilePanel from "./MobilePanel"
import MenuButton from "./MenuButton"
import Nav from "./Nav"

import logo from "./logo-black.svg"
import logoWhite from "./logo-white.svg"

const Outer = styled.header`
    background: ${props => props.isTransparent ? (!props.isSticky ? "transparent" : theme.white) : theme.white};
    border-bottom: 1px solid ${props => props.isTransparent ? "transparent" : theme.grey};
    margin-bottom: ${props => props.overlay ? "-65px" : "0px"};
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
    padding: 0px 15px;

    @media screen and (min-width: ${theme.xl}){
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

const LogoLink = styled(Link)`
    padding: 6px 2px;
`

const Logo = styled.img`
    width: 75px;
`

const TopSection = styled.div`
    background: ${props => props.isTransparent ? "transparent" : theme.white};
    padding-top: 15px;
    transition: 0.1s ease-out;
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
    const [isOverlaid, setOverlaid] = useState(overlay)
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
                onMouseLeave={() => {
                    setSelected(false)
                    overlay && setOverlaid(true)
                }}
                onMouseEnter={() => setOverlaid(false)}
                isTransparent={isOverlaid}>
                <Inner>
                    <LogoLink to="/">
                        <Logo src={isOverlaid ? logoWhite : logo} alt="British Film Institute"/>
                    </LogoLink>
                </Inner>

                <QuickLinks 
                    Inner={QuickLinksInner} 
                    isOverlaid={isOverlaid} 
                    isSticky={isSticky}
                />
            </TopSection>
            <Outer 
                ref={ref}
                onMouseLeave={() => {
                    setSelected(false)
                    overlay && setOverlaid(true)
                }}
                onMouseEnter={() => setOverlaid(false)}
                isTransparent={isOverlaid}
                overlay={overlay}
                isSticky={isSticky}
            >
                <Inner>
                    
                    <Nav
                        navItems={navItems}
                        selected={selected}
                        setSelected={setSelected}
                        isOverlaid={isOverlaid}
                        isSticky={isSticky}
                    />
                    <MenuButton 
                        handleClick={() => setOpen(!open)}
                        open={open}
                    />
                    <Search isOverlaid={isOverlaid} />
                </Inner>
            </Outer>
            {open && <MobilePanel navItems={navItems}/>}
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