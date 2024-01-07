import { useState } from "react";
import HeaderTabs from "../../components/HeaderTabs";
import EditAcademic from "../../views/EditAcademic";
import EditHero from "../../views/EditHero";
import EditProjects from "../../views/EditProjects";

export default function EditPage() {
	const [tab, setTab] = useState<"HERO" | "ACADEMIC" | "PROJECTS">("HERO");

	const Page = {
		HERO: <EditHero />,
		ACADEMIC: <EditAcademic />,
		PROJECTS: <EditProjects />
	}[tab];

	return (
		<div>
			<HeaderTabs
				tabs={[
					{
						name: "Hero Section",
						onClick: () => {
							console.log("Hero");

							setTab("HERO");
						}
					},
					{
						name: "Formação Acadêmica",
						onClick: () => {
							console.log("academ");

							setTab("ACADEMIC");
						}
					},
					{
						name: "Projetos",
						onClick: () => {
							console.log("projects");

							setTab("PROJECTS");
						}
					}
				]}
			/>

			{Page}
		</div>
	);
}
