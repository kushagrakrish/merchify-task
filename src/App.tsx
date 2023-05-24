import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='bg-gray-200'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
