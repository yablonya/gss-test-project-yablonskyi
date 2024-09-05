import type {Meta, StoryObj} from '@storybook/react';
import InputGroup, {InputSize} from './InputGroup';
import HelpIcon from "../icons/HelpIcon";
import SearchIcon from '../icons/SearchIcon';

const meta: Meta<typeof  InputGroup> = {
	title: 'Components/InputGroup',
	component: InputGroup,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		label: 'Check',
		required: true,
		infoText: '',
		type: 'search',
		size: InputSize.EXTRA_SMALL,
		iconBefore: <SearchIcon />,
		iconAfter: <HelpIcon />,
	},
};

export const Base: Story = {
	args: {
		label: 'Check',
		required: true,
		disabled: true,
		infoText: 'Some tips',
	},
};

export const Large: Story = {
	args: {
		label: 'Check',
		required: true,
		type: 'password',
		infoText: '',
		showError: true,
		size: InputSize.LARGE,
		iconBefore: <SearchIcon />,
		iconAfter: <HelpIcon />,
	},
};

export const ExtraLarge: Story = {
	args: {
		label: 'Check',
		required: false,
		infoText: 'Some tips',
		size: InputSize.EXTRA_LARGE,
		iconBefore: <SearchIcon />,
		iconAfter: <HelpIcon />,
	},
};

export const DarkBase: Story = {
	args: {
		label: 'Check',
		required: false,
		infoText: 'Some tips',
		iconBefore: <SearchIcon />,
		darkTheme: true,
	},
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#1A1A1E',
				},
			],
		},
	},
};

export const DarkLargeError: Story = {
	args: {
		label: 'Check',
		required: true,
		infoText: 'Some tips',
		size: InputSize.LARGE,
		iconBefore: <SearchIcon />,
		iconAfter: <HelpIcon />,
		darkTheme: true,
		showError: true
	},
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#1A1A1E',
				},
			],
		},
	},
};

export const DarkSmallDisabled: Story = {
	args: {
		label: 'Check',
		infoText: 'Some tips',
		size: InputSize.EXTRA_SMALL,
		iconAfter: <HelpIcon />,
		darkTheme: true,
		disabled: true
	},
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#1A1A1E',
				},
			],
		},
	},
};