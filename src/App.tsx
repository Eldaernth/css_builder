import React from 'react';
import {AppBody} from "./style/App-styles"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Css_Builder from "./pages/CssBuilder"
import {ElementContextProvider} from "./context/ElementContext"


function App() {
  return (
    <AppBody>
      <Router>
        <Switch>
          <ElementContextProvider>
          <Route exact path="/" component={Css_Builder}/>
          </ElementContextProvider>
        </Switch>
      </Router>
    </AppBody>
  );
}

export default App;
