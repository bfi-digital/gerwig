import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"
import { Checkbox } from "../Checkbox"

const Outer = styled.div`
    height: 100%;
    padding: 15px 25px 25px 25px;
    background-color: ${theme.lightGrey};
`
const Frequency = styled.div`
    display: inline-block;
    padding: 6px 15px 6px 25px;
    margin-left: -25px;
    background-color: ${theme.primary};
    color: ${theme.white};
    font-size: 17px;
    font-weight: ${theme.fontWeight_semiBold};
    color: ${theme.white};
`

const Heading = styled.h3`
    margin-bottom: 15px;
    font-size: ${theme.large_fontSize_xl};
    font-weight: ${theme.fontWeight_semiBold};
`

const Text = styled.p`
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: ${theme.fontWeight_semiBold};
`

export const FormCard = ({
    id,
    frequency,
    heading,
    description,
}) => 
    <Outer>
        {frequency && <Frequency>{ frequency }</Frequency>}
        <Heading>{ heading }</Heading>
        <Text>{ description }</Text>
        <Checkbox id={ id } name={ id } label="Subscribe to this" value=""></Checkbox>
    </Outer>
FormCard.propTypes = {
    id: PropTypes.string,
    frequency: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string
}

FormCard.defaultProps = {
    id: "",
    frequency: "",
    heading: "",
    description: ""
}