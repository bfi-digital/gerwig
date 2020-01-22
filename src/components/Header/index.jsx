import React, { useState } from "react"
import theme from "../_theme"
import styled from "styled-components"
import { Link } from "@reach/router"
import Search from "./Search"
import MobilePanel from "./MobilePanel"
import MenuButton from "./MenuButton"

import * as logo from "./logo-black.svg"

const Outer = styled.header`
    background: ${theme.white};
`

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    padding: 5px 15px;
`

const Logo = styled.img`
    width: 46px;
`

export const Header = ({
    navItems
}) => {

    const [mobilePanel, setMobilePanel] = useState(false)

    return(
        <>
            <Outer>
                <Inner>
                    <Link to="/">
                        <Logo src={logo} alt="British Film Institute"/>
                    </Link>
                    <MenuButton 
                        handleClick={() => setMobilePanel(!mobilePanel)}
                        open={mobilePanel}
                    />
                    <Search/>
                </Inner>
            </Outer>

            {mobilePanel && <MobilePanel navItems={navItems}/>}
        </>
    )
}

