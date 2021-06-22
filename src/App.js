import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tabledata from './components/Tabledata';
import Chart from './components/Chart';



function App() {

 

  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Tabledata}  exact />
        <Route path="/Chart" component={Chart}  />
      </Switch>
   </BrowserRouter>
   </div>
      );
}

export default App;
