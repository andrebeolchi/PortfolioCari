export interface AcademicDetailsProps {
	title: string;
	description: string;
}

export interface AcademicItemProps {
	id: string;
	title: string;
	subtitle: string;
	inputedImage?: Blob | Uint8Array | ArrayBuffer;
	imageUrl: string;
	date: string;
	category: string;
}

export interface AcademicProps extends AcademicDetailsProps {
	items: AcademicItemProps[];
}
