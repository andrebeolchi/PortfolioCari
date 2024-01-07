import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { HeroProvider } from "../context/HeroContext";
import { ProtectedRoute } from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const EditHero = lazy(() => import("../pages/Edit/Hero"));

export default function AppRoutes() {
	return (
		<AuthProvider>
			<HeroProvider>
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
							path="/edit/hero"
							element={
								<ProtectedRoute>
									<EditHero />
								</ProtectedRoute>
							}
						/>

						<Route
							path="/edit/projects"
							element={
								<ProtectedRoute>
									<EditHero />
								</ProtectedRoute>
							}
						/>

						<Route
							path="*"
							element={<Home />}
						/>
					</Routes>
				</BrowserRouter>
			</HeroProvider>
		</AuthProvider>
	);
}
