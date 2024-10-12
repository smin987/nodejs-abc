import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id"
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