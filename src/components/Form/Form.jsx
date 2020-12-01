import { Field } from "redux-form"
import { Box, Button } from "@material-ui/core"
import { ButtonGroup } from "@material-ui/core"

import ColorPickerCommon from "../common/FormControls/ColorPickerCommon"
import TextFieldCommon from "./../common/FormControls/TextFieldCommon"

const Form = ({ handleSubmit, handleColorChange, saveImgToPng, saveHTML }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Box mt={2} mb={2}>
					<Field
						placeholder="Введите описание баннера"
						name="description"
						type="text"
						component={TextFieldCommon}
					/>
					<Box mt={0.5}>
						<Field
							name="color"
							component={ColorPickerCommon}
							onColorChange={handleColorChange}
						/>
					</Box>
				</Box>

				<ButtonGroup
					orientation="vertical"
					color="primary"
					aria-label="vertical contained primary button group"
					variant="contained"
					fullWidth
				>
					<Button type="button" onClick={saveImgToPng}>
						Сохранить баннер в png
					</Button>
					<Button type="button" onClick={saveHTML}>
						Сохранить баннер в буфер обмена
					</Button>
					<Button type="submit">
						Скопировать конфигурацию баннера в буфер обмена (json)
					</Button>
				</ButtonGroup>
			</form>
		</div>
	)
}

export default Form
