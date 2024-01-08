export interface ProjectsDetailsProps {
	title: string;
	description: string;
}

export interface ProjectsItemProps {
	id: string;
	title: string;
	subtitle: string;
	inputedImage?: Blob | Uint8Array | ArrayBuffer;
	imageUrl: string;
	date: string;
	category: string;
	order: number;
}

export interface ProjectsProps extends ProjectsDetailsProps {
	items: ProjectsItemProps[];
}
