import React from "react"
import PropTypes from "prop-types"

import { Button } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core"
import theme from "../styles"

export const MyButton = (props) => {
  const { label, size, variant, handleClick } = props
  return (
    <ThemeProvider theme={theme}>
      <Button
        type="button"
        size={size}
        variant={variant}
        onClick={handleClick}
        {...props}
      >
        {label}
      </Button>
    </ThemeProvider>
  )
}

MyButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  handleClick: PropTypes.func,
}

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };
