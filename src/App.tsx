import {Navigate, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdoptPage from "./pages/AdoptPage/AdoptPage";
import SuccessesPage from "./pages/SuccessesPage/SuccessesPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DogPage from "./pages/DogPage/DogPage";
import { AUTH_TOKEN } from "./util/constants";
import { getDataFromTokenModel } from "./util/token";
import { Component } from "react";
import ProfileUpdatePage from "./pages/ProfileUpdatePage/ProfileUpdatePage";

interface AppState {
  token: string | null;
  role: Role | null;
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  readonly state: AppState = {
    token: localStorage.getItem(AUTH_TOKEN),
    role: getDataFromTokenModel("role") as Role,
  };

  setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
    } else {
      localStorage.removeItem(AUTH_TOKEN);
    }
    this.setState({ token, role: getDataFromTokenModel("role") as Role });
  };


render () {
  const { token, role } = this.state;
    const userRouteElement =
      role === "ADMIN" ? <DogPage /> : <Navigate to="/home" replace />;
  return (
      <div className="App">
        <header className="App-header">
          <Navbar isLoggedIn={!!token} setToken={this.setToken}/>
        </header>
          <Routes>
              {token ? (
            <>
              <Route path="/" element={<HomePage />}/>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/adopt" element={<AdoptPage />}/>
              <Route path="/dog/create" element={<DogPage />} />
              <Route path="/dog/:id" element={<DogPage/>} />
              <Route path="/successes" element={<SuccessesPage />}/>
              <Route path="/user/me" element={<ProfileUpdatePage />}/>
              <Route path="/error" element={<ErrorPage />}/>
              <Route path="*" element={<Navigate to={"/home"} replace={true}/>}/>
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />}/>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/adopt" element={<AdoptPage />}/>
              <Route path="/successes" element={<SuccessesPage />}/>
              <Route path="/registration" element={<SignUpPage />}/>
              <Route path="/login"
                element={<LoginPage setToken={this.setToken} />}
              />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </>
          )}
          </Routes>
      </div>
  );
          }}


export default App;