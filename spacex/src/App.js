import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import logo from './spacex-logo.png'
//
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}`
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='container'>
          <img src={logo} alt="SpaceX logo" style={{width: 300, display:'block', margin:'auto'}} />
        </div>
        <Routes>
          <Route path="/" element={<Launches />} />
          <Route path="/launch/:id" element={<Launch />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
