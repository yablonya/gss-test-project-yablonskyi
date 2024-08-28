import type {Meta, StoryObj} from '@storybook/react';
import InputGroup, {InputSize, InputType} from './InputGroup';
import HelpIcon from "@/components/icons/HelpIcon";
import ShortKeyIcon from "@/components/icons/ShortKeyIcon";
import SearchIcon from "@/components/icons/SearchIcon";

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
		infoText: 'Some tips',
	},
};

export const Large: Story = {
	args: {
		label: 'Check',
		required: true,
		type: InputType.PASSWORD,
		infoText: '',
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