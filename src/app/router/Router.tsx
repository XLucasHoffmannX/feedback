import { BrowserRouter as RouterApp, Route, Routes } from 'react-router-dom';

import { FallbackError } from '@/resources/components/global';
import { AuthView, Home } from '@/resources/views';

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
          path='*'
          element={<FallbackError />}
        />
      </Routes>
    </RouterApp>
  );
}
