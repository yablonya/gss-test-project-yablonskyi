import {ComponentPropsWithoutRef, FC, ReactNode} from 'react';

import {InputSize, InputStyle, InputType} from "../../InputGroup";
import classNames from 'classnames';

import './InputText.scss'


interface InputTextProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
	type?: InputType;
	size?: InputSize;
	inputStyle?: InputStyle;
	placeholder?: string;
	disabled?: boolean;
	isError?: boolean;
	iconBefore?: ReactNode;
	iconAfterFirst?: ReactNode;
	iconAfterSecond?: ReactNode;
}

const InputText: FC<InputTextProps> = ({
	type = InputType.DEFAULT,
	size = InputSize.MEDIUM,
	inputStyle = InputStyle.NORMAL,
	placeholder = '',
	disabled = false,
	isError = false,
	iconBefore = null,
	iconAfterFirst = null,
	iconAfterSecond = null,
	...rest
}) => {
	
	const className = classNames('inputText', {
		inputTextXSmall: size === InputSize.EXTRA_SMALL,
		inputTextLarge: size === InputSize.LARGE,
		inputTextXLarge: size === InputSize.EXTRA_LARGE,
		inputTextIconBefore: iconBefore,
		inputTextIconAfterFirst: iconAfterFirst,
		inputTextIconAfterSecond: iconAfterSecond,
		inputTextError: isError,
		inputTextQuiet: inputStyle === InputStyle.QUIET,
		inputTextSingleAfterIcon: iconAfterFirst && !iconAfterSecond || !iconAfterFirst && iconAfterSecond, // New class for one after icon
		inputTextDoubleAfterIcon: iconAfterFirst && iconAfterSecond,
	});

	return (
		<div className={className}>
			<input type={type} placeholder={placeholder} disabled={disabled} {...rest}/>
			{iconBefore && <div className='iconContainer iconBefore'>{iconBefore}</div>}
			<div className='afterIcons'>
				{iconAfterFirst && <div className='iconContainer iconAfterFirst'>{iconAfterFirst}</div>}
				{iconAfterSecond && <div className='iconContainer iconAfterSecond'>{iconAfterSecond}</div>}
			</div>
		</div>
	);
};

export default InputText;