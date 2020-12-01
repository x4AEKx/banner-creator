import React from "react"
import { formValueSelector } from "redux-form"
import { connect } from "react-redux"

import Preview from "./Preview"

class PreviewContainer extends React.Component {
	render() {
		return (
			<Preview
				description={this.props.formValues.values.description}
				formColor={this.props.formValues.values.color}
				bannerRef={this.props.bannerRef}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		formValues: {
			values: formValueSelector("banner")(state, "description", "color")
		}
	}
}

export default connect(mapStateToProps, null)(PreviewContainer)
