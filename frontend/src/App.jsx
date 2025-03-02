import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
// pages
import Main from "./pages/Main";
import Skills from "./components/body/skills/Skills";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Router>
	);
}

export default App;
