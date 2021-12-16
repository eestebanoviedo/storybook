import React from "react"
import PropTypes from "prop-types"

import { Button } from "@material-ui/core"

export const MyButton = (props) => {
  const { label, size, variant, handleClick } = props
  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      onClick={handleClick}
      {...props}
    >
      {label}
    </Button>
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
