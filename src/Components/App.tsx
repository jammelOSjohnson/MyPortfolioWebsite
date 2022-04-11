import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomeScreen } from '../Screens/Home/HomeScreen';
import Counter from '../Screens/Counter';
import TodoList from '../Screens/TodoList';
//import { Header } from './Header';
//import { Footer } from './Footer';
//Import provider








const App: React.FC = function App() {
  // useEffect(() =>{
  //   document.body.style.backgroundColor = "#fff"
  // })

  return (
    <>
      <Router>
        {/* <Header/> */}
          <Route path="/" exact component={HomeScreen} />
          <Route path="/Counter" exact component={Counter} />
          <Route path="/TodoList" exact component={TodoList} />
        {/* <Footer/> */}
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