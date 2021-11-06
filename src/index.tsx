import { StrictMode } from 'react';
import { render } from 'react-dom';
import 'utils/styles/reset.scss';

import App from 'App/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
