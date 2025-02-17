import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';
import { DateTime } from 'luxon';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Shared/UI/Header',
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    date: DateTime.now(),
  },
};

export const CustomDate: Story = {
  args: {
    date: DateTime.fromISO('2023-08-15T12:00:00'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const expectedDate = DateTime.fromISO('2023-08-15T12:00:00')
      .setLocale('ru')
      .toFormat('LLLL yyyy');
    expect(canvas.getByText(expectedDate)).toBeTruthy();
  },
};
