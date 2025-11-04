import { fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';
import React from 'react';
import ParkCard from '../components/ParkCards';

jest.mock('expo-router', () => ({ router: { push: jest.fn() } }));


test('ParkCard renders correctly', () => {
    render(<ParkCard title="Yellowstone" subtitle="First national park in the U.S." />);

});

test('ParkCard is clickable and triggers navigation via onPress', () => {
  const navigation = { navigate: jest.fn() };
  const onPress = () => router.push('/selectTrail');

  const { getByText } = render(
    <ParkCard
      title="Yellowstone"
      subtitle="First national park in the U.S."
      onPress={onPress}
    />
  );

  fireEvent.press(getByText('Yellowstone'));
  expect(router.push).toHaveBeenCalledWith('/selectTrail');
});

