export interface FlyoutMenuProps {
	name: string;
	href: string;
	submenus?: SubmenuProps[];
	callsToAction?: Omit<SubmenuProps, "description">[];
}

export interface SubmenuProps {
	name: string;
	href: string;
	icon: string;
	description: string;
}
