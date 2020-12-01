import React from "react"
import { reduxForm } from "redux-form"
import Form from "./Form"

class FormContainer extends React.Component {
	handleColorChange = (color) => {
		this.props.change("color", color)
	}

	render() {
		return (
			<Form
				onSubmit={this.props.onSubmit}
				handleColorChange={this.handleColorChange}
				saveImgToPng={this.props.saveImgToPng}
				saveHTML={this.props.saveHTML}
				handleSubmit={this.props.handleSubmit}
			/>
		)
	}
}

export default reduxForm({ form: "banner" })(FormContainer)
