import logo from "./logo.svg";
import "./App.css";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="w-screen ">
      <div className="flex items-center w-screen border-2 border-black-600 border-solid overflow-hidden">
        {/* Left Wing Starts */}
        <div className="min-w-3/12 border-2 border-red-600 border-solid">
          {/* DP Profile & Name Shows */}
          <Profile />
        </div>
        {/* Rigth wing starts */}
        <div className="right-wing">2</div>
      </div>
    </div>
  );
}

export default App;
