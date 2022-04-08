import * as React from 'react';
import core from "@fubo/core";
import Routes from "container/Routes";

const { AppProvider } = core.components;

const App = () => (
  <AppProvider>
    <h1>STAC Sandbox</h1>
    <Routes />
  </AppProvider>
);

export default App;
