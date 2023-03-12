import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
