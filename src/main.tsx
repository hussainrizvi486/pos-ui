import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import POSApp from './App.tsx';
import { Provider } from 'react-redux';
import store from './store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <POSApp />
    </Provider>
  </StrictMode>,
)
