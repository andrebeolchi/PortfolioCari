import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>

				<Route
					path="*"
					element={<Home />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
