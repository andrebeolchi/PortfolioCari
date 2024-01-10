import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { HeroProvider } from "../context/HeroContext";

import { AcademicProvider } from "../context/AcademicContext";
import { ProjectsProvider } from "../context/ProjectsContext";
import EditAcademic from "../views/Edit/Academic";
import EditAcademicItems from "../views/Edit/AcademicItems";
import EditFooterItems from "../views/Edit/Footer";
import EditHero from "../views/Edit/Hero";
import EditProjects from "../views/Edit/Projects";
import EditProjectsItems from "../views/Edit/ProjectsItems";
import { ProtectedRoute } from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const EditPage = lazy(() => import("../pages/Edit"));

export default function AppRoutes() {
	return (
		<AuthProvider>
			<HeroProvider>
				<AcademicProvider>
					<ProjectsProvider>
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
												<EditProjects />
											</EditPage>
										</ProtectedRoute>
									}
								/>

								<Route
									path="/edit/projects/:id"
									element={
										<ProtectedRoute>
											<EditPage>
												<EditProjectsItems />
											</EditPage>
										</ProtectedRoute>
									}
								/>

								<Route
									path="/edit/footer"
									element={
										<ProtectedRoute>
											<EditPage>
												<EditFooterItems />
											</EditPage>
										</ProtectedRoute>
									}
								/>

								<Route
									path="/edit/footer/:id"
									element={
										<ProtectedRoute>
											<EditPage>
												<EditFooterItems />
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
					</ProjectsProvider>
				</AcademicProvider>
			</HeroProvider>
		</AuthProvider>
	);
}
