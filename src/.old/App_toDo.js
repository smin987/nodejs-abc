import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setTodo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === "") {
      return
    }
    setTodo("")
    // [a, b, ...Z]에서 ...는 []에 있는 값 c부터 z까지 나열시키는것을 뜻한다.
    setToDos((currentArray) => [toDo, ...currentArray])
  }
  return (
    <div>
      <h1>MY To Do({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder='Write your to do...' />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;