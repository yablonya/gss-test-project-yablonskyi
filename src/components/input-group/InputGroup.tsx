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

export enum InputType {
	DEFAULT = 'text',
	PASSWORD = 'password',
	SEARCH = 'search',
}

export enum InputStyle {
	NORMAL = 'normal',
	QUIET = 'quiet',
}

interface InputGroupProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
	label?: string,
	required?: boolean;
	infoText?: string;
	size?: InputSize;
	type?: InputType;
	inputStyle?: InputStyle;
	placeholder?: string;
	disabled?: boolean;
	isError?: boolean;
	helpText?: string;
	sideLabel?: boolean;
	iconBefore?: ReactNode;
	iconAfterFirst?: ReactNode;
	iconAfterSecond?: ReactNode;
	darkTheme?: boolean;
}

const InputGroup: FC<InputGroupProps> = (
	{
		label = '',
		required = false,
		infoText = '',
		size = InputSize.MEDIUM,
		type = InputType.DEFAULT,
		inputStyle = InputStyle.NORMAL,
		placeholder = '',
		disabled = false,
		isError = false,
		helpText= '',
		sideLabel = false,
		iconBefore = null,
		iconAfterFirst = null,
		iconAfterSecond = null,
		darkTheme = false,
		...rest
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
				darkTheme={darkTheme}
			/>
			<InputText
				type={type}
				size={size}
				inputStyle={inputStyle}
				placeholder={placeholder}
				disabled={disabled}
				isError={isError}
				iconBefore={iconBefore}
				iconAfterFirst={iconAfterFirst}
				iconAfterSecond={iconAfterSecond}
				darkTheme={darkTheme}
				{...rest}
			/>
			{helpText &&
        <InputAnnotation
          helpText={helpText}
          size={size}
          disabled={disabled}
          isError={isError}
          darkTheme={darkTheme}
        />
			}
		</div>
	);
};

export default InputGroup;