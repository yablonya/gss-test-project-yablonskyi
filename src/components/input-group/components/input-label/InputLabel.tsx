import {FC} from "react";

import InfoIcon from "@/components/icons/InfoIcon";
import {InputSize} from "@/components/input-group/InputGroup";
import classNames from "classnames";

import './InputLabel.scss';

interface InputLabelProps {
	label: string,
	required?: boolean;
	infoText?: string;
	size: InputSize;
	disabled: boolean;
}

const InputLabel: FC<InputLabelProps> = (
	{
		label,
		required,
		infoText,
		size,
		disabled
	}) => {
	const prepInfoText = infoText?.trim();
	
	const className = classNames('inputLabel', {
		inputLabelLarge: size === InputSize.LARGE ||  size === InputSize.EXTRA_LARGE,
		inputLabelDisabled: disabled,
	});
	
	return (
		<div className={className}>
			<p className='labelText'>{label}</p>
			{!disabled && required && <p className='asterisk'>*</p>}
			{prepInfoText && <div title={prepInfoText}><InfoIcon/></div>}
		</div>
	);
};

export default InputLabel;