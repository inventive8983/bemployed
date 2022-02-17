import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './theme'
import { HashRouter as Router } from 'react-router-dom';
import Views from './views';
import { Route, Switch } from 'react-router-dom';
import './assets/scss/_global.scss'

function App() {


  return (
      <ChakraProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/" component={Views}/>
            </Switch>
          </Router>
      </ChakraProvider>
  );
}

export default App;
