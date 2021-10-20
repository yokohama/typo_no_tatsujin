import { BrowserRouter, Route, Switch} from "react-router-dom"
import Header from './components/Header'

import Top from './pages/Top'
import Game from './pages/Game'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
