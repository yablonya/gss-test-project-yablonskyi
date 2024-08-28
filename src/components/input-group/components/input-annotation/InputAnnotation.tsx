import {FC} from "react";

import {InputSize} from "@/components/input-group/InputGroup";
import classNames from "classnames";

import './InputAnnotation.scss'

interface InputAnnotationProps {
	helpText?: string;
	size?: InputSize;
	disabled?: boolean;
	isError?: boolean;
}

const InputAnnotation: FC<InputAnnotationProps> = (
	{
		helpText = '',
		size = InputSize.MEDIUM,
		disabled = false,
		isError = false,
	}) => {
	const className = classNames('inputAnnotation', {
		inputAnnotationLarge: size === InputSize.LARGE ||  size === InputSize.EXTRA_LARGE,
		inputAnnotationDisabled: disabled,
		inputAnnotationError: isError,
	});
	
	return (
		<p className={className}>{helpText}</p>
	);
};

export default InputAnnotation;