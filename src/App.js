import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import MainPage from "./MainPage";
function App() {
	return (
		<div className="app">
			<div className="app__body">
				<SideBar />
				<MainPage />
			</div>
		</div>
	);
}

export default App;
