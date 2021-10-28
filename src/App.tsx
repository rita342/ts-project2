import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Reservation from './components/Reservation'
import Menu from './components/Menu'

function App() {
  return (
    <div>
      <Router>
        <MyNav title="Strivestaurant" />
        <Route exact path="/" render={(routerProps) => <Home {...routerProps} title="Strivestaurant" />} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/menu" component={Menu} />
      </Router>
    </div>
  )
}

export default App