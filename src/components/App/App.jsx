import { Container, Typography } from "@material-ui/core"

import PreviewContainer from "./../Preview/PreviewContainer"
import FormContainer from "../Form/FormContainer"

const App = ({ bannerRef, onSubmit, saveImgToPng, saveHTML }) => {
	return (
		<>
			<Typography
				variant="h4"
				component="h1"
				align="center"
				style={{ color: "white" }}
			>
				Баннер конструктор
			</Typography>
			<Container
				direction="column"
				justify="center"
				alignItems="center"
				style={{
					backgroundColor: "#2C2F34",
					maxWidth: "280px",
					borderRadius: "4px"
				}}
			>
				<PreviewContainer bannerRef={bannerRef} />
				<FormContainer
					onSubmit={onSubmit}
					saveImgToPng={saveImgToPng}
					saveHTML={saveHTML}
				/>
			</Container>
		</>
	)
}

export default App
