import {Navigate, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AdoptPage from "./pages/AdoptPage/AdoptPage";
import SuccessesPage from "./pages/SuccessesPage/SuccessesPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DogPage from "./pages/DogPage/DogPage";


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/signin" element={<SignInPage />}/>
              <Route path="/adopt" element={<AdoptPage />}/>
              <Route path="/dog/create" element={<DogPage />} />
              <Route path="/successes" element={<SuccessesPage />}/>
              <Route path="/error" element={<ErrorPage />}/>
              <Route path="*" element={<Navigate to={"/error"} replace={true}/>}/>
          </Routes>
      </div>
  );
}

export default App;
