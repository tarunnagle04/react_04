import './App.css';
import NavigationRouters from './components/routerFolder/NavigationRouters';
import HeaderFile from './components/Header/HeaderFile';

function App() {
  return (
    <div className="App">
      <HeaderFile/>
      <NavigationRouters/>
    </div>
  );
}

export default App;
