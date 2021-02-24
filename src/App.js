import React from 'react';
import SearchForm from './SearchForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header'

function App() {
  return (
    <MuiThemeProvider>
      <Header />
      <SearchForm />
    </MuiThemeProvider>
  );
}

export default App;
