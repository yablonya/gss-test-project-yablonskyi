import {ComponentPropsWithoutRef, FC, ReactNode} from 'react';
import {InputSize} from "../../InputGroup";
import classNames from "classnames";

import './InputText.scss';

interface InputTextProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
	size?: InputSize;
	type?: 'text' | 'password' | 'search';
	inputStyle?: 'normal' | 'quiet';
	placeholder?: string;
	disabled?: boolean;
	showError?: boolean;
	iconBefore?: ReactNode;
	iconAfter?: ReactNode;
	darkTheme?: boolean;
}

const InputText: FC<InputTextProps> = ({
	type = 'text',
	size = InputSize.MEDIUM,
	inputStyle = 'normal',
	placeholder = '',
	disabled = false,
	showError = false,
	iconBefore = null,
	iconAfter = null,
	darkTheme = false,
	...rest
}) => {
	const className = classNames('inputText', {
		inputTextXSmall: size === InputSize.EXTRA_SMALL,
		inputTextLarge: size === InputSize.LARGE,
		inputTextXLarge: size === InputSize.EXTRA_LARGE,
		inputTextDisabled: disabled,
		inputTextError: showError,
		inputTextQuiet: inputStyle === 'quiet',
	});

	if (darkTheme) {
		document.body.classList.add('darkTheme');
	} else {
		if (document.body.classList.contains('darkTheme')) {
			document.body.classList.remove('darkTheme');
		}
	}

	return (
		<div className={className}>
			{iconBefore && <div className='iconContainer iconBefore'>{iconBefore}</div>}
			<input type={type} placeholder={placeholder} disabled={disabled} {...rest}/>
			{iconAfter && <div className='iconContainer iconAfterFirst'>{iconAfter}</div>}
		</div>
	);
};

export default InputText;