import React , {Component} from "react";
import UserForm from './pages/UserForm';
import Layout from './layout/layout';

export class App extends Component{
  render(){
    return (
      <main>
        <Layout>
          <UserForm />
        </Layout>
      </main>
    )
  }
}

export default App;
