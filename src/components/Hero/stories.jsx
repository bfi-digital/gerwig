import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Hero } from "./index"
 
export default {
    title: "2 All Components/Hero",
    decorators: [withA11y],
}

export const normal = () =>
    <div style={{
        padding: "20px",
        maxWidth: "1400px"
    }}>
        <Hero 
            image1920x1080="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
            imageAltText="Alt text for the image"
            imageCopyright="HELP MUSICIANS, directed by Thomas Guthrie"
            title="Britain on Lockdown: How online videos have shaped the crisis"
            standfirst="As the BFI National Archive calls on the British public to help map the digital video response to coronavirus across the UK, our curators begin a regular new series highlighting the online videos that have made an impact during the lockdown period."
            category="Article category"
            type="Feature"
            date="28 April 2020"
            authors={[
                {
                    name: "Ros Cranston",
                    url: "#"
                },
                // {
                //     name: "Ros Cranston2",
                //     url: "#"
                // }
            ]}
        />
    </div>
