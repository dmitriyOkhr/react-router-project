import { Routes, Route } from "react-router-dom";
import Notfoundpage from "./pages/Notfoundpage";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Postspage from "./pages/Postspage";
import Layout from "./components/Layout";
import Singlepage from "./pages/Singlepage";
import Mainpagetodo from "./pages/todo/Mainpagetodo";
import Snowpage from "./pages/Snowpage";
import Weatherinfo from "./pages/Weatherinfo";
import Timerpage from "./pages/Timerpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="posts" element={<Postspage />}></Route>
          <Route path="posts/:id" element={<Singlepage />}></Route>
          <Route path="about" element={<Aboutpage />}></Route>
          <Route path="todo" element={<Mainpagetodo />}></Route>
          <Route path="snowfall" element={<Snowpage />}></Route>
          <Route path="*" element={<Notfoundpage />}></Route>
          <Route path="weather" element={<Weatherinfo />}></Route>
          <Route path="timer" element={<Timerpage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
