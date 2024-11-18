
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// 리액트에서는 class 대신 className이라고 사용한다.
function App() {
  return (
    <main>
      <div className="card">
        <div className="card_header">강의 목록</div>
        <div className="card_body">
          <div className="cources">
    <Courseitem />
    <Courseitem />
    <Courseitem />

          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
