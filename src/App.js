import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id"
          element={<Detail />}>
        </Route>
        <Route path="/"
          element={< Home />}>
        </Route>
      </Routes>
    </Router >
  )
}

export default App;

// npm i gh-pages 를 인스톨 하여 git hub에 웹을 발행하자.