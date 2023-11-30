import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const Provedores = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
)

export const renderComProvedores = (ui, options) =>
  render(ui, {
    wrapper: Provedores,
    ...options,
  });

export * from '@testing-library/react';

export { renderComProvedores as render };