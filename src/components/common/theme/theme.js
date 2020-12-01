import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
	overrides: {
		MuiButton: {
			root: {
				fontSize: "0.5rem"
			}
		},
		MuiContainer: {
			root: {
				paddingTop: "8px",
				paddingBottom: "16px"
			}
		}
	}
})

export default theme
