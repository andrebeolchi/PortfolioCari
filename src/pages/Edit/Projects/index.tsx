import { useState } from "react";
import LoggedPage from "../../../views/LoggedPage";
import EditHeader from "../components/EditHeader";

export default function EditPage() {
	const [tab, setTab] = useState<"HERO" | "ACADEMIC" | "PROJECTS">("HERO");

	const Page = {
		HERO: <LoggedPage />,
		ACADEMIC: <LoggedPage />,
		PROJECTS: <LoggedPage />
	}[tab];

	return (
		<div>
			<EditHeader 
        onChangeTab={setTab}
      />

			<Page />
		</div>
	);
}
