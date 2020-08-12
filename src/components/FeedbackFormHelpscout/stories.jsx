import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { FeedbackForm } from "./index"
 
export default {
    title: "4 Components/All/Feedback Form Helpscout",
    decorators: [withA11y],
}

export const example = () =>
    <div style={{
        padding: "20px"
    }}>
        <FeedbackForm />
    </div>
