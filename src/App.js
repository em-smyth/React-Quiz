import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
