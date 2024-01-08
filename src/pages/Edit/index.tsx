import { AcademicCapIcon, PencilIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import HeaderTabs from "../../components/HeaderTabs";
import { useAcademic } from "../../context/AcademicContext.hooks";
import EditAcademic from "../../views/EditAcademic";
import EditHero from "../../views/EditHero";
import EditProjects from "../../views/EditProjects";

type TabType = "HERO" | "ACADEMIC" | "ACADEMIC_ITEM" | "PROJECTS";

export default function EditPage() {
	const [tab, setTab] = useState<TabType>("HERO");
	const [selectedItem, setSelectedItem] = useState<unknown>(null);
	const { data: academicData } = useAcademic();

	console.log("academicData ", academicData);

	const onPressItem = (tab: TabType, item: unknown) => {
		setTab(tab);
		setSelectedItem(item);
	};

	const Page = {
		HERO: <EditHero />,
		ACADEMIC: <EditAcademic />,
		ACADEMIC_ITEM: <EditAcademic selectedItem={selectedItem} />,
		PROJECTS: <EditProjects />
	}[tab];

	if (!academicData) {
		return null;
	}

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
						name: academicData.title,
						submenus: academicData.items.map((item) => ({
							name: item.title,
							description: item.category,
							imageUrl: item.imageUrl,
							onClick: () => {
								onPressItem("ACADEMIC_ITEM", item);
							}
						})),
						callsToAction: [
							{
								name: "Editar Detalhes",
								onClick: () => {
									setTab("ACADEMIC");
								},
								icon: PencilIcon
							},
							{
								name: "Adicionar Curso",
								onClick: () => {
									console.log("Reordenar Cursos");
								},
								icon: AcademicCapIcon
							}
						]
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
