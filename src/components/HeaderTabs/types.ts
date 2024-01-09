import { ElementType } from "react";

export interface FlyoutMenuProps {
	name: string;
	href?: string;
	submenus?: SubmenuProps[];
	emptyState?: {
		title: string;
		description: string;
		image?: string;
	};
	callsToAction?: Omit<SubmenuProps, "description">[];
	onClick?: () => void;
}

export interface SubmenuProps {
	name: string;
	href?: string;
	onClick?: () => void;
	image?: string;
	icon?: ElementType;
	description: string;
}
