import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/'
import Home from './components/Home'
import Projects from './components/Projects'
import Homework1 from './components/Homework1'
import Homework2 from './components/Homework2/App'
import Homework3 from './components/Homework3'
import Homework4 from './components/Homework4'
import Contact from './components/Contact'
import PageMissing from './components/PageMissing'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"projects"} element={<Projects />} />
          <Route path={"projects/1"} element={<Homework1 />} />
          <Route path={"projects/2"} element={<Homework2 />} />
          <Route path={"projects/3"} element={<Homework3 />} />
          <Route path={"projects/4"} element={<Homework4 />} />
          <Route path={"contact"} element={<Contact />} />
          <Route path={"*"} element={<PageMissing />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
