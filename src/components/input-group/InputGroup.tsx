import {ComponentPropsWithoutRef, FC, ReactNode} from 'react';

import InputLabel from './components/input-label/InputLabel';
import InputText from './components/input-text/InputText';
import InputAnnotation from './components/input-annotation/InputAnnotation';
import classNames from 'classnames';

import '../../styles/index.scss';
import './InputGroup.scss';

export enum InputSize {
	EXTRA_SMALL = 'extra-small',
	MEDIUM = 'medium',
	LARGE = 'large',
	EXTRA_LARGE = 'extra-large',
}

interface InputGroupProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
	label?: string,
	required?: boolean;
	infoText?: string;
	size?: InputSize;
	type?: 'text' | 'password' | 'search';
	inputStyle?: 'normal' | 'quiet';
	placeholder?: string;
	disabled?: boolean;
	showError?: boolean;
	helpText?: string;
	sideLabel?: boolean;
	iconBefore?: ReactNode;
	iconAfter?: ReactNode;
	darkTheme?: boolean;
}

const InputGroup: FC<InputGroupProps> = (
	{
		label = '',
		required = false,
		infoText = '',
		size = InputSize.MEDIUM,
		type = 'text' as 'text' | 'password' | 'search',
		inputStyle = 'normal' as 'normal' | 'quiet',
		placeholder = '',
		disabled = false,
		showError = false,
		helpText= '',
		sideLabel = false,
		iconBefore = null,
		iconAfter = null,
		darkTheme = false,
		...rest
	}) => {
	const className = classNames('inputGroup', { inputGroupSideLabel: sideLabel });
	if (darkTheme) {
		document.body.classList.add('darkTheme');
	} else {
		document.body.classList.remove('darkTheme');
	}
	
	return (
		<div className={className}>
			<InputLabel
				label={label}
				required={required}
				infoText={infoText}
				size={size}
				disabled={disabled}
				darkTheme={darkTheme}
			/>
			<InputText
				type={type}
				size={size}
				inputStyle={inputStyle}
				placeholder={placeholder}
				disabled={disabled}
				showError={showError}
				iconBefore={iconBefore}
				iconAfter={iconAfter}
				darkTheme={darkTheme}
				{...rest}
			/>
			{helpText &&
        <InputAnnotation
          helpText={helpText}
          size={size}
          disabled={disabled}
          showError={showError}
          darkTheme={darkTheme}
        />
			}
		</div>
	);
};

export default InputGroup;