import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MyHeader from './components/Header/MyHeader';
import MyCVHome from './Pages/CVHome/MyCVHome';


function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <Switch>
        <Route path='/home' component={MyCVHome} />
        <Route path="/" component={MyCVHome} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
