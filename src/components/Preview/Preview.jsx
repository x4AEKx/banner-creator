import { Typography } from "@material-ui/core"

const Preview = ({ formColor, bannerRef, description }) => {
	return (
		<>
			<Typography variant="h6" component="h2" style={{ color: "white" }}>
				Предпросмотр:
			</Typography>
			<div
				ref={bannerRef}
				style={{
					height: "250px",
					width: "230px",
					margin: "0 auto"
				}}
			>
				<a href="https://avito.ru" style={{ textDecoration: "none" }}>
					<div
						style={{
							backgroundImage: `url(https://i.vgy.me/JtUN9L.png)`,
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							height: "100%",
							width: "100%",
							borderRadius: "4px"
						}}
					>
						<div
							style={{
								color: formColor,
								padding: "70% 2% 0",
								wordWrap: "break-word",
								overflow: "hidden",
								lineHeight: "1.3em",
								height: "3.9em"
							}}
						>
							{description}
						</div>
					</div>
				</a>
			</div>
		</>
	)
}

export default Preview
