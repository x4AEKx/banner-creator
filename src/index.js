import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import AppContainer from "./components/App/AppContainer"
import { MuiThemeProvider } from "@material-ui/core"
import theme from "./components/common/theme/theme"

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<AppContainer />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById("root")
)
