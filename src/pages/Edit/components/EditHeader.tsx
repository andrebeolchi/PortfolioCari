import HeaderTabs from "../../../components/HeaderTabs";

export default function EditHeader({ onChangeTab }: { onChangeTab?: (tab: "HERO" | "ACADEMIC" | "PROJECTS") => void }) {
	return (
		<HeaderTabs
			tabs={[
				{
					name: "Hero Section",
					onClick: () => onChangeTab?.("HERO")
				},
				{
					name: "Formação Acadêmica",
					onClick: () => onChangeTab?.("ACADEMIC")
				},
				{
					name: "Projetos",
					onClick: () => onChangeTab?.("PROJECTS")
				}
			]}
		/>
	);
}
