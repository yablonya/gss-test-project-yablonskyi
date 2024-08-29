import {FC} from 'react';

import {InputSize} from "../../InputGroup";
import classNames from "classnames";

import './InputAnnotation.scss'

interface InputAnnotationProps {
	helpText?: string;
	size?: InputSize;
	disabled?: boolean;
	isError?: boolean;
	darkTheme?: boolean;
}

const InputAnnotation: FC<InputAnnotationProps> = (
	{
		helpText = '',
		size = InputSize.MEDIUM,
		disabled = false,
		isError = false,
		darkTheme = false,
	}) => {
	const prepHelpText = helpText.trim();
	const className = classNames('inputAnnotation', {
		inputAnnotationLarge: size === InputSize.LARGE ||  size === InputSize.EXTRA_LARGE,
		inputAnnotationDisabled: disabled,
		inputAnnotationError: isError,
		inputAnnotationDark: darkTheme
	});
	
	return (
		<p className={className}>{prepHelpText}</p>
	);
};

export default InputAnnotation;