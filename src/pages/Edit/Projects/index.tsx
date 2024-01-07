import HeaderTabs from "../../../components/HeaderTabs";
import LoggedPage from "../../../views/LoggedPage";

export default function EditHero() {
	return (
		<div>
			<HeaderTabs
				tabs={[
					{
						name: "Hero Section",
						href: "#"
					},
					{
						name: "Projetos",
						href: "#"
					}
				]}
			/>

			<LoggedPage />
		</div>
	);
}
