export interface FlyoutMenuProps {
	name: string;
	href?: string;
	submenus?: SubmenuProps[];
	callsToAction?: Omit<SubmenuProps, "description">[];
	onClick?: () => void;
}

export interface SubmenuProps {
	name: string;
	href?: string;
	onClick?: () => void;
	imageUrl?: string;
	icon?: React.ForwardRefExoticComponent<
		React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
			title?: string;
			titleId?: string;
		} & React.RefAttributes<SVGSVGElement>
	>;
	description: string;
}
