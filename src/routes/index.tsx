import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { HeroProvider } from "../context/HeroContext";

import { AcademicProvider } from "../context/AcademicContext";
import EditAcademic from "../views/Edit/Academic";
import EditAcademicItems from "../views/Edit/AcademicItems";
import EditHero from "../views/Edit/Hero";
import EditProjects from "../views/Edit/Projects";
import { ProtectedRoute } from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const EditPage = lazy(() => import("../pages/Edit"));

export default function AppRoutes() {
	return (
		<AuthProvider>
			<HeroProvider>
				<AcademicProvider>
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
								path="/edit"
								element={
									<ProtectedRoute>
										<EditPage>
											<EditHero />
										</EditPage>
									</ProtectedRoute>
								}
							/>

							<Route
								path="/edit/academic"
								element={
									<ProtectedRoute>
										<EditPage>
											<EditAcademic />
										</EditPage>
									</ProtectedRoute>
								}
							/>

							<Route
								path="/edit/academic/:id"
								element={
									<ProtectedRoute>
										<EditPage>
											<EditAcademicItems />
										</EditPage>
									</ProtectedRoute>
								}
							/>

							<Route
								path="/edit/projects"
								element={
									<ProtectedRoute>
										<EditPage>
											<EditAcademic />
										</EditPage>
									</ProtectedRoute>
								}
							/>

							<Route
								path="/edit/projects/:id"
								element={
									<ProtectedRoute>
										<EditPage>
											<EditProjects />
										</EditPage>
									</ProtectedRoute>
								}
							/>

							<Route
								path="*"
								element={<Home />}
							/>
						</Routes>
					</BrowserRouter>
				</AcademicProvider>
			</HeroProvider>
		</AuthProvider>
	);
}
