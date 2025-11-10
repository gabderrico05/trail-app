import { fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';
import React from 'react';
import ParkCard from '../components/ParkCards';

jest.mock('expo-router', () => ({ router: { push: jest.fn() } }));

beforeEach(() => {
  jest.clearAllMocks();
});

test('ParkCard renders correctly', () => {
  const { getByText } = render(
    <ParkCard name="Yellowstone" complement="First national park in the U.S." />
  );

  expect(getByText('Yellowstone - First national park in the U.S.')).toBeTruthy();
});

test('ParkCard renders address when provided', () => {
  const { getByText } = render(
    <ParkCard name="Grand Canyon" complement="Arizona" address="Arizona, USA" />
  );

  expect(getByText('Arizona, USA')).toBeTruthy();
});

test('calls provided onPress when pressed', () => {
  const onPress = jest.fn();
  const { getByText } = render(
    <ParkCard name="Yellowstone" complement="First national park in the U.S." onPress={onPress} />
  );

  fireEvent.press(getByText(/Yellowstone/));
  expect(onPress).toHaveBeenCalled();
});

test('invokes router.push when onPress uses router', () => {
  const onPress = () => router.push('/selectTrail');
  const { getByText } = render(
    <ParkCard name="Yellowstone" complement="First national park in the U.S." onPress={onPress} />
  );

  fireEvent.press(getByText(/Yellowstone/));
  expect(router.push).toHaveBeenCalledWith('/selectTrail');
});
