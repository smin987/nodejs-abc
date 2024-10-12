import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 최초 마운트 시에만 실행되는 useEffect
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
    // 'return 함수()'를 사용하면 객체가 사라질때 실행되는 동작을 지정할수 있다.
    // 본 예시에서는 사라지게 하는 기능을 넣지 않았으므로 최초1번만 작동한다.
    return () => console.log("bye ^^/~")
  }, []);

  // keyword가 변경될 때만 실행되는 useEffect
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("키워드가 5자 이상입니다.");
    }
  }, [keyword]);

  // counter가 변경될 때만 실행되는 useEffect
  useEffect(() => {
    console.log(`카운터가 ${counter}로 변경되었습니다.`);
  }, [counter]);

  return (
    <div>
      <input
        name="input"
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
