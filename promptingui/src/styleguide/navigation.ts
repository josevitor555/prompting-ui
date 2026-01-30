export interface NavItem {
    name: string;
    href: string;
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const navigation: NavSection[] = [
    {
        title: "Foundation",
        items: [
            { name: "Design Tokens", href: "/styleguide" },
        ]
    },
    {
        title: "Components",
        items: [
            { name: "Sidebar", href: "/styleguide/components/sidebar" },
            { name: "Table", href: "/styleguide/components/table" },
            { name: "Bar Chart", href: "/styleguide/components/bar-chart" },
        ]
    }
];
