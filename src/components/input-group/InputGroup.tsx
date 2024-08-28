import {FC, ReactNode} from "react";

import InputLabel from "@/components/input-group/components/input-label/InputLabel";
import InputText from "@/components/input-group/components/input-text/InputText";
import InputAnnotation from "@/components/input-group/components/input-annotation/InputAnnotation";
import classNames from "classnames";

import '@/index.css';
import './InputGroup.scss';

export enum InputSize {
	EXTRA_SMALL = 'extra-small',
	MEDIUM = 'medium',
	LARGE = 'large',
	EXTRA_LARGE = 'extra-large',
}

export enum InputType {
	DEFAULT = 'text',
	PASSWORD = 'password',
	SEARCH = 'search',
}

interface InputGroupProps {
	label: string,
	required?: boolean;
	infoText?: string;
	size?: InputSize;
	type?: InputType;
	placeholder?: string;
	disabled?: boolean;
	isError?: boolean;
	helpText?: string;
	sideLabel?: boolean;
	iconBefore?: ReactNode;
	iconAfterFirst?: ReactNode;
	iconAfterSecond?: ReactNode;
}

const InputGroup: FC<InputGroupProps> = (
	{
		label,
		required = false,
		infoText = '',
		size = InputSize.MEDIUM,
		type = InputType.DEFAULT,
		placeholder = '',
		disabled = false,
		isError = false,
		helpText= '',
		sideLabel = false,
		iconBefore = null,
		iconAfterFirst = null,
		iconAfterSecond = null,
	}) => {
	const className = classNames('inputGroup', { inputGroupSideLabel: sideLabel });
	
	return (
		<div className={className}>
			<InputLabel
				label={label}
				required={required}
				infoText={infoText}
				size={size}
				disabled={disabled}
			/>
			<InputText
				type={type}
				size={size}
				placeholder={placeholder}
				disabled={disabled}
				isError={isError}
				iconBefore={iconBefore}
				iconAfterFirst={iconAfterFirst}
				iconAfterSecond={iconAfterSecond}
			/>
			<InputAnnotation
				helpText={helpText}
				size={size}
				disabled={disabled}
				isError={isError}
			/>
		</div>
	);
};

export default InputGroup;