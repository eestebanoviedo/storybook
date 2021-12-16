import React from "react"

import { MyButton } from "../components/MyButton/MyButton"

export default {
  title: "Example/MyButton",
  component: MyButton,
  argTypes: { handleClick: { action: "Me clickeaste" } },
}

// FORMA 1
const Template = (props) => <MyButton {...props} />

export const Primary = Template.bind({})
Primary.args = {
  label: "Boton 1",
  size: "small",
  color: "default",
  variant: "outlined",
}
// FORMA 2
export const Secondary = (props) => <MyButton {...props} />

// FORMA 3
export const Tercary = ( ) => (
  <MyButton label="Boton 3" size="large" color="primary" variant="contained" />
)
