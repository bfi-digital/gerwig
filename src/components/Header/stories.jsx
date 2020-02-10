import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Header } from "./index"
import navItems from "./data"

export default {
    title: "Pattern Library|Structure/Header",
    decorators: [withA11y],
    parameters: {
        backgrounds: [
            { name: "black", value: "#000000", default: true },
            { name: "white", value: "#ffffff" },
        ]
    }
}

export const opaqueBackground = () =>
    <Header navItems={navItems} />

export const transparentBackground = () =>
    <Header navItems={navItems} overlay={true} />

export const withOverflowingContent = () =>
    <>
        <Header navItems={navItems} />
        <div style={{
            height: "200vh",
            width: "100%",
            background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)"
        }}></div>
    </>