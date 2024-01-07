import HeaderTabs from "../../../components/HeaderTabs";
import LoggedPage from "../../../views/LoggedPage";

export default function EditHero() {
	return (
		<div>
			<HeaderTabs
				tabs={[
					{
						name: "Hero Section",
						href: "/edit/hero"
					},
					{
						name: "Projetos",
						href: "/edit/projects"
					}
				]}
			/>

			<LoggedPage />
		</div>
	);
}
