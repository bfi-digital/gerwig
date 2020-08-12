import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { PageLinks } from "./index"
import three, { two } from "./data"

export default {
    title: "4 Components/All/PageLinks",
    decorators: [withA11y],
}

export const ThreeLinks = () =>
    <PageLinks links={three} />

export const TwoLinks = () =>
    <PageLinks links={two} />

export const NineLinks = () =>
    <PageLinks links={[
        ...three, ...three, ...three
    ]} />

export const LinksWithImage = () =>
    <PageLinks links={three} withImages={true} />

export const SixLinks = () =>
    <PageLinks links={[
        ...three, ...three
    ]} />

export const FourLinks = () =>
    <PageLinks links={[
        ...two, ...two
    ]} />
