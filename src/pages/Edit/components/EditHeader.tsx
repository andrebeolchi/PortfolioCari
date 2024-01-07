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
					href: "/edit/academic"
				},
				{
					name: "Projetos",
					href: "/edit/projects"
				}
			]}
		/>
	);
}
