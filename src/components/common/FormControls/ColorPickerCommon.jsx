import React from "react"
import { GithubPicker } from "react-color"
import { Button } from "@material-ui/core"

class ColorPickerCommon extends React.Component {
	state = {
		displayColorPicker: false
	}

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker })
	}

	handleClose = () => {
		this.setState({ displayColorPicker: false })
	}

	handleChangeComplete = (color) => {
		this.props.onColorChange(color.hex)
	}

	render() {
		const popover = {
			position: "absolute",
			zIndex: "2"
		}
		const cover = {
			position: "fixed",
			top: "0px",
			right: "0px",
			bottom: "0px",
			left: "0px"
		}
		return (
			<>
				<Button
					fullWidth
					variant="contained"
					type="button"
					onClick={this.handleClick}
				>
					Выберите цвет текста
				</Button>
				{this.state.displayColorPicker ? (
					<div style={popover}>
						<div style={cover} onClick={this.handleClose} />
						<GithubPicker
							onChangeComplete={this.handleChangeComplete}
							width="inherit"
						/>
					</div>
				) : null}
			</>
		)
	}
}

export default ColorPickerCommon
