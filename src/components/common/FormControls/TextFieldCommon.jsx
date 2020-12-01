import React from "react"
import { TextField } from "@material-ui/core"

const TextFieldCommon = (props) => (
	<TextField
		size="small"
		label={props.placeholder}
		variant="outlined"
		fullWidth
		{...props.input}
	/>
)

export default TextFieldCommon
