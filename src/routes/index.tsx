import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './StackRoutes';
import { BottomRoutes } from './BottomRoutes';
import { DrawerRoutes } from './DrawerRoutes';

export function Routes() {
  return (
    // O NavigationContainer  vai disponibilizar todas as rotas que estão disponiveis
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
