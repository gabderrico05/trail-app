import { fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';
import React from 'react';
import TrailCard from '../components/TrailCard';

jest.mock('expo-router', () => ({ router: { push: jest.fn() } }));


test('TrailCard renders correctly', () => {
  const { getByText } = render(
    <TrailCard
      imgSrc=""
      title="Yellowstone"
      time="1h"
      distance="5km"
      level="Easy"
      detailLink="/detailTrail"
    />
  );

  expect(getByText('Yellowstone')).toBeTruthy();
});

test('TrailCard "Ver mais detalhes" navigates to detailTrail', () => {
  const { getByText } = render(
    <TrailCard
      imgSrc=""
      title="Appalachian Trail"
      time="2h"
      distance="10km"
      level="Medium"
      detailLink="/detailTrail"
    />
  );

  fireEvent.press(getByText('Ver mais detalhes'));
  expect(router.push).toHaveBeenCalledWith('/detailTrail');
});

//  TESTE PARA O BOTÃO "INICIAR" AINDA NÃO IMPLEMENTADO NO COMPONENTE
//
// test('TrailCard "Iniciar" navigates to xxxxxxxx', () => {
//   const { getByText } = render(
//     <TrailCard
//       imgSrc=""
//       title="Appalachian Trail"
//       time="2h"
//       distance="10km"
//       level="Medium"
//       detailLink="/detailTrail"
//     />
//   );
//
//   fireEvent.press(getByText('Iniciar'));
//   expect(router.push).toHaveBeenCalledWith('/xxxxxxxx');
// });