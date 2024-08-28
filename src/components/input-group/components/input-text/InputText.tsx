import './InputText.scss'
import {InputSize, InputType} from "@/components/input-group/InputGroup";
import classNames from 'classnames';
import {FC} from "react";
import * as React from "react";

interface InputTextProps {
	type?: InputType;
	size?: InputSize;
	placeholder?: string;
	disabled?: boolean;
	isError?: boolean;
	iconBefore?: React.ReactNode;
	iconAfterFirst?: React.ReactNode;
	iconAfterSecond?: React.ReactNode;
}

const InputText: FC<InputTextProps> = ({
	type = InputType.DEFAULT,
	size = InputSize.MEDIUM,
	placeholder = '',
	disabled = false,
	isError = false,
	iconBefore = null,
	iconAfterFirst = null,
	iconAfterSecond = null,
}) => {
	
	const className = classNames('inputText', {
		inputTextXSmall: size === InputSize.EXTRA_SMALL,
		inputTextLarge: size === InputSize.LARGE,
		inputTextXLarge: size === InputSize.EXTRA_LARGE,
		inputTextIconBefore: iconBefore,
		inputTextIconAfterFirst: iconAfterFirst,
		inputTextIconAfterSecond: iconAfterSecond,
		inputTextError: isError,
	});

	return (
		<div className={className}>
			<input type={type} placeholder={placeholder} disabled={disabled}/>
			{iconBefore && <div className='iconContainer'>{iconBefore}</div>}
			{iconAfterFirst && <div className='iconContainer iconAfter'>{iconAfterFirst}</div>}
			{iconAfterSecond && <div className='iconContainer'>{iconAfterSecond}</div>}
		</div>
	);
};

export default InputText;