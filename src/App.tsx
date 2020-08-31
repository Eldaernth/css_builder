import React from 'react';
import {AppBody} from "./style/App-styles"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Css_Builder from "./pages/Css_Builder"


function App() {
  return (
    <AppBody>
      <Router>
        <Switch>
          <Route exact path="/" component={Css_Builder}/>
        </Switch>
      </Router>
    </AppBody>
  );
}

export default App;
