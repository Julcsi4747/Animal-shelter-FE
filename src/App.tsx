
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AdoptPage from "./components/AdoptPage/AdoptPage";
import FosterPage from "./components/FosterPage/FosterPage";
import SignInPage from "./components/SignInPage/SignInPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

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
              <Route path="/foster" element={<FosterPage />}/>
              <Route path="/error" element={<ErrorPage />}/>
              <Route path="*" element={<Navigate to={"/error"} replace={true}/>}/>
          </Routes>
      </div>
  );
}

export default App;
