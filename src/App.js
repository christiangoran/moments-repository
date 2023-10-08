import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exacg path="/signin" render={() => <h1>Sign In</h1>} />
          <Route exacg path="/signup" render={() => <h1>Sign Up</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
