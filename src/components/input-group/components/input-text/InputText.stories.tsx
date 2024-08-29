import {Meta, StoryObj} from "@storybook/react";
import {InputSize, InputStyle, InputType} from "../../InputGroup";
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
		inputStyle: InputStyle.QUIET,
		size: InputSize.EXTRA_SMALL,
		placeholder: 'Enter text...',
	},
}

export const LargeErrorPassword: Story = {
	args: {
		size: InputSize.LARGE,
		type: InputType.PASSWORD,
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
		iconAfterSecond: <ShortKeyIcon />,
	},
}

export const AllIconsSmall: Story = {
	args: {
		placeholder: 'Enter text...',
		size: InputSize.EXTRA_SMALL,
		iconBefore: <SearchIcon />,
		iconAfterFirst: <HelpIcon />,
		iconAfterSecond: <ShortKeyIcon />,
	},
}
