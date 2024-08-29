import {Meta, StoryObj} from "@storybook/react";
import {InputSize} from "../../InputGroup";
import InputAnnotation from "./InputAnnotation";

const meta: Meta<typeof InputAnnotation> = {
	title: 'Components/InputAnnotation',
	component: InputAnnotation,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		helpText: 'Some useful information',
		size: InputSize.MEDIUM,
	},
};

export const Large: Story = {
	args: {
		helpText: 'Some useful information',
		size: InputSize.LARGE,
	},
};