import {FC} from 'react';

import InfoIcon from '../../../icons/InfoIcon';
import {InputSize} from '../../InputGroup';
import classNames from 'classnames';

import './InputLabel.scss';

interface InputLabelProps {
	label: string,
	required?: boolean;
	infoText?: string;
	size: InputSize;
	disabled: boolean;
	darkTheme?: boolean;
}

const InputLabel: FC<InputLabelProps> = (
	{
		label,
		required,
		infoText,
		size,
		disabled,
		darkTheme = false,
	}) => {
	const prepInfoText = infoText?.trim();
	
	const className = classNames('inputLabel', {
		inputLabelLarge: size === InputSize.LARGE ||  size === InputSize.EXTRA_LARGE,
		inputLabelDisabled: disabled,
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
			<p className='labelText'>{label}</p>
			{!disabled && required && <p className='asterisk'>*</p>}
			{prepInfoText && <div title={prepInfoText}><InfoIcon/></div>}
		</div>
	);
};

export default InputLabel;