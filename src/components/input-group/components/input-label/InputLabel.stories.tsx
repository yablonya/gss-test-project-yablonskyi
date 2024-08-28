import type {Meta, StoryObj} from '@storybook/react';
import InputLabel from './InputLabel';
import {InputSize} from "@/components/input-group/InputGroup";

const meta: Meta<typeof  InputLabel> = {
	title: 'Components/InputLabel',
	component: InputLabel,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		label: 'Check',
		required: true,
		infoText: 'Some tips',
		size: InputSize.MEDIUM,
		disabled: false,
	},
};

export const Large: Story = {
	args: {
		label: 'Check',
		required: true,
		infoText: 'Some tips',
		size: InputSize.EXTRA_LARGE,
		disabled: false,
	},
};
