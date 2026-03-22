
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import logo from './octofitapp-small.png';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
            <img src={logo} alt="OctoFit Logo" className="App-logo" />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">活動</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">排行榜</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">團隊</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">使用者</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">運動紀錄</Link>
              </li>
            </ul>
            <span className="navbar-text text-white fw-light">
              健身社群管理平台
            </span>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="text-center mt-5">
              <div className="card shadow mx-auto" style={{maxWidth: '32rem'}}>
                <div className="card-body">
                  <h1 className="card-title display-5 mb-3">歡迎使用 <span className="text-primary">OctoFit Tracker</span></h1>
                  <p className="card-text">請從上方選單選擇功能，開始管理您的健身活動、團隊、排行榜與運動紀錄！</p>
                  <a className="btn btn-outline-primary mt-2" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
