import type {Meta, StoryObj} from '@storybook/react';
import InputGroup, {InputSize, InputType} from './InputGroup';
import HelpIcon from "../icons/HelpIcon";
import ShortKeyIcon from '../icons/ShortKeyIcon';
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
		type: InputType.SEARCH,
		size: InputSize.EXTRA_SMALL,
		iconBefore: <SearchIcon />,
		iconAfterFirst: <HelpIcon />,
		iconAfterSecond: <ShortKeyIcon />,
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
		type: InputType.PASSWORD,
		infoText: '',
		isError: true,
		size: InputSize.LARGE,
		iconBefore: <SearchIcon />,
		iconAfterFirst: <HelpIcon />,
		iconAfterSecond: <ShortKeyIcon />,
	},
};

export const ExtraLarge: Story = {
	args: {
		label: 'Check',
		required: false,
		infoText: 'Some tips',
		size: InputSize.EXTRA_LARGE,
		iconBefore: <SearchIcon />,
		iconAfterSecond: <ShortKeyIcon />,
	},
};

export const DarkBase: Story = {
	args: {
		label: 'Check',
		required: false,
		infoText: 'Some tips',
		iconBefore: <SearchIcon />,
		iconAfterSecond: <ShortKeyIcon />,
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
		iconAfterSecond: <ShortKeyIcon />,
		darkTheme: true,
		isError: true
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