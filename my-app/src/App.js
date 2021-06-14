import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom"; 
import Navigation from './components/Navigation/Navigation';
import AjoutAnnonce from './components/Annonces/AjoutAnnonce';
import AffichageAnnonce from './components/Annonces/AffichageAnnonce';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage  from './pages/login';
import { useEffect, useState } from 'react';


function App() {
  const [isAuth,setIsAuth]= useState(false) ;
  useEffect(()=>{
    const token = localStorage.getItem("token")
  },[])  
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path ='/register' /> 
      </Switch>
      <AjoutAnnonce/>
      <AffichageAnnonce/>
    </div>
  );
}

export default App;
