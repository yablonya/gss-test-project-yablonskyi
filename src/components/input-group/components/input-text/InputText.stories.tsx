import {Meta, StoryObj} from "@storybook/react";
import {InputSize} from "../../InputGroup";
import InputText from "./InputText";
import SearchIcon from "../../../icons/SearchIcon";
import HelpIcon from "../../../icons/HelpIcon";
import ShortKeyIcon from "../../../icons/ShortKeyIcon";

const meta: Meta<typeof InputText> = {
	title: 'Components/InputText',
	component: InputText,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		placeholder: 'Enter text...',
	},
};

export const SmallQuiet: Story = {
	args: {
		inputStyle: 'quiet',
		size: InputSize.EXTRA_SMALL,
		placeholder: 'Enter text...',
	},
}

export const LargeErrorPassword: Story = {
	args: {
		size: InputSize.LARGE,
		type: 'password',
		placeholder: 'Enter text...',
		isError: true
	},
}

export const ExtraLargeDisable: Story = {
	args: {
		size: InputSize.EXTRA_LARGE,
		placeholder: 'Enter text...',
		disabled: true
	},
}

export const IconBefore: Story = {
	args: {
		placeholder: 'Enter text...',
		iconBefore: <SearchIcon />,
	},
}

export const IconAfterFirst: Story = {
	args: {
		placeholder: 'Enter text...',
		iconAfterFirst: <HelpIcon />,
	},
}

export const IconAfterSecond: Story = {
	args: {
		placeholder: 'Enter text...',
		iconBefore: <SearchIcon />,
		iconAfter: <HelpIcon />,
	},
}

export const AllIconsSmall: Story = {
	args: {
		placeholder: 'Enter text...',
		size: InputSize.EXTRA_SMALL,
		iconBefore: <SearchIcon />,
		iconAfter: <HelpIcon />,
	},
}
