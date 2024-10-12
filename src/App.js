import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}
          element={< Home />}>
        </Route>
      </Routes>
    </Router >
  )
}

export default App;

// npm i gh-pages 를 인스톨 하여 git hub에 웹을 발행하자.