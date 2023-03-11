import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="app">
      <Header />
      <TodoProvider>
        <Main />
      </TodoProvider>
      <Footer />
    </div>
  );
}

export default App;
