import { render } from '@testing-library/react-native';
import React from 'react';
import ParkCard from '../components/ParkCards';

test('ParkCard renders correctly', () => {
    render(<ParkCard title="Yellowstone" subtitle="First national park in the U.S." />);

});