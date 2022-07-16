import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Directory from "./pages/Directory";
import Profile from "./pages/Profile";

// Styles
import "./assets/fonts/fonts.css";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Directory />} />
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
