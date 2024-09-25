import { BrowserRouter as RouterApp, Route, Routes } from 'react-router-dom';

import { FallbackError } from '@/resources/components/global';
import { AuthView, Home } from '@/resources/views';
import { PlanAndPayments } from '@/resources/views/PlanAndPayments/PlanAndPayments.view';

export function Router(): JSX.Element {
  return (
    <RouterApp>
      <Routes>
        <Route
          path='/'
          element={<AuthView context='login' />}
        />

        <Route
          path='/register'
          element={<AuthView context='register' />}
        />

        <Route
          path='/home'
          element={<Home />}
        />

        <Route
          path='/plan-and-payments'
          element={<PlanAndPayments />}
        />

        <Route
          path='*'
          element={<FallbackError />}
        />
      </Routes>
    </RouterApp>
  );
}
