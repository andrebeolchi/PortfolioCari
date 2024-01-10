export interface FooterGroup {
	title: string;
	items: FooterItem[];
	id?: string;
}

export interface FooterSocial {
	instagram: string;
	whatsapp: string;
}

export interface FooterItem {
	title: string;
	href: string;
	id?: string;
}
