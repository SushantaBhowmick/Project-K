import { ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/provider';
import { Provider as ReactProvider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
   <ReactProvider store={store}>
   <ChakraProvider theme={theme}>
    <ColorModeScript />
      <App />
    </ChakraProvider>
   </ReactProvider>
  </StrictMode>
);
