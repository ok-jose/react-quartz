import {QuartZ} from "./quartz.tsx";
import type {StoryObj} from "@storybook/react";

const meta = {
    title: 'Example/Quartz',
    component: QuartZ,
    };
export default meta;
type Story = StoryObj<typeof meta>;

export const Quartz: Story = {
    args: {
        primary: true,
        label: 'Quartz',
    },
};