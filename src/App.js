import React,{lazy, Suspense} from 'react' ;
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const Home = lazy(()=> import ('./routers/home/page'))


function App() {
  return (
    <Router>
      <Suspense fallback = {<div>loading...</div>}>
        <Routes>
           <Route path="/dath2" element={<Home />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
