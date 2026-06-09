import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './StackRoutes';
import { BottomRoutes } from './BottomRoutes';

export function Routes() {
  return (
    // O NavigationContainer vai disponibilizar todas as rotas que estão disponiveis
    <NavigationContainer>
      <BottomRoutes />
    </NavigationContainer>
  );
}
