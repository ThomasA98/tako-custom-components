import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type MyLabelProps } from "../components/MyLabel";

const meta: Meta<MyLabelProps> = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: "inline-radio",
        },
        fontColor: {
            control: 'color',
        }
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof MyLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic Label',
    }
}

export const AllCaps: Story = {
    args: {
        label: 'All caps',
        allCaps: true,
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        color: 'text-secondary',
    }
}

export const CustomColor: Story = {
    args: {
        label: 'Custom Color Label',
        fontColor: '#493'
    }
}