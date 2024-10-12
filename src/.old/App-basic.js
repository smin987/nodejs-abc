import Button from "./Button"
import PropTypes from 'prop-types'
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome back!!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}
Button.PropTypes = {
  text: PropTypes.string.isRequired,
}


export default App;