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
        title: "Pages",
        items: [
            { name: "Portfolio", href: "/portfolio" },
        ]
    },
    {
        title: "Components",
        items: [
            { name: "Accordion", href: "/styleguide/components/accordion" },
            { name: "Card", href: "/styleguide/components/card" },
            { name: "Table", href: "/styleguide/components/table" },
            { name: "Bar Chart", href: "/styleguide/components/bar-chart" },
            { name: "Button", href: "/styleguide/components/button" },
            { name: "Input", href: "/styleguide/components/input" },
        ]
    }
];
