import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { NewsletterSignUp } from "./index"
 
export default {
    title: "2 All Components/Newsletter Sign Up",
    decorators: [withA11y],
}

export const example = () =>
    <div style={{
        padding: "20px"
    }}>
        <NewsletterSignUp />
    </div>
