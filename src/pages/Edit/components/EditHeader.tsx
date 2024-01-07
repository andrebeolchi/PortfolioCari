import HeaderTabs from "../../../components/HeaderTabs";

export default function EditHeader() {
	return (
		<HeaderTabs
			tabs={[
				{
					name: "Hero Section",
					href: "/edit/hero"
				},
				{
					name: "Formação Acadêmica",
					href: "/edit/education"
				},
				{
					name: "Projetos",
					href: "/edit/projects"
				}
			]}
		/>
	);
}
