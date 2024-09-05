import {FC} from 'react';

import {InputSize} from "../../InputGroup";
import classNames from "classnames";

import './InputAnnotation.scss'

interface InputAnnotationProps {
	helpText?: string;
	size?: InputSize;
	disabled?: boolean;
	showError?: boolean;
	darkTheme?: boolean;
}

const InputAnnotation: FC<InputAnnotationProps> = (
	{
		helpText = '',
		size = InputSize.MEDIUM,
		disabled = false,
		showError = false,
		darkTheme = false,
	}) => {
	const prepHelpText = helpText.trim();
	const className = classNames('inputAnnotation', {
		inputAnnotationLarge: size === InputSize.LARGE ||  size === InputSize.EXTRA_LARGE,
		inputAnnotationDisabled: disabled,
		inputAnnotationError: showError,
	});

	if (darkTheme) {
		document.body.classList.add('darkTheme');
	} else {
		if (document.body.classList.contains('darkTheme')) {
			document.body.classList.remove('darkTheme');
		}
	}
	
	return (
		<p className={className}>{prepHelpText}</p>
	);
};

export default InputAnnotation;