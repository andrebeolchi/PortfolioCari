import HeaderTabs from "../../components/HeaderTabs";

export default function Dashboard() {
	return (
		<div>
			<HeaderTabs
				tabs={[
					{
						name: "Tela Inicial",
						href: "#"
					},
					{
						name: "Projetos",
						href: "#"
					}
				]}
			/>
		</div>
	);
}
