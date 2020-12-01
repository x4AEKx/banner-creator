import React from "react"
import html2canvas from "html2canvas"
import { saveAs } from "file-saver"

import App from "./App"

class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.bannerRef = React.createRef()
	}

	onSubmit = (values) => {
		let json = {
			...values
		}
		navigator.clipboard.writeText(JSON.stringify(json))
	}

	saveImgToPng = () => {
		html2canvas(this.bannerRef.current, { useCORS: true }).then((canvas) => {
			canvas.toBlob(function (blob) {
				saveAs(blob, "banner.png")
			})
		})
	}

	saveHTML = () => {
		navigator.clipboard.writeText(
			this.bannerRef.current.outerHTML.replace(/&quot;/g, "")
		)
	}

	render() {
		return (
			<App
				onSubmit={this.onSubmit}
				saveImgToPng={this.saveImgToPng}
				saveHTML={this.saveHTML}
				bannerRef={this.bannerRef}
			/>
		)
	}
}

export default AppContainer
