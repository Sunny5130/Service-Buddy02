import './App.css';
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import Post from "./components/post.js";
import Find from "./components/find.js";
import Signin from "./components/signin.js";
import Login from "./components/login.js";
import Footer from "./components/footer.js";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/find" element={<Find />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
