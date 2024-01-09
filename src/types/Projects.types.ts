export interface ProjectsDetailsProps {
	title: string;
	description: string;
}

export interface ProjectsItemProps {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	bullets: BulletProps[];

	inputedImages?: InputImage[];
	images: ImagesProps[];
	order: number;
}

export type InputImage = File & { order?: number; title?: string };

interface BulletProps {
	icon: string;
	title: string;
	description: string;
}

interface ImagesProps {
	url: string;
	title: string;
	order: number;
	id: string;
}

export interface ProjectsProps extends ProjectsDetailsProps {
	items: ProjectsItemProps[];
}
