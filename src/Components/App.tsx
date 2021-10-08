import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomeScreen } from '../Screens/Home/HomeScreen';
import { Header } from './Header';
import { Footer } from './Footer';
//Import provider


import { useEffect } from 'react';








const App: React.FC = function App() {
  // useEffect(() =>{
  //   document.body.style.backgroundColor = "#fff"
  // })

  return (
    <>
      <Router>
        <Header/>
          <Route path="/" exact component={HomeScreen} />
        <Footer/>
      </Router>
    </>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
  return (
        <App />
  );
};