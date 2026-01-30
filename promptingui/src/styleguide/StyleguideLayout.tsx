import { useState } from 'react';
import { navigation } from './navigation';

interface StyleguideLayoutProps {
    children: React.ReactNode;
    currentPage?: string;
}

export default function StyleguideLayout({ children, currentPage = '/styleguide' }: StyleguideLayoutProps) {
    const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('dark');

    const toggleTheme = () => {
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        setActiveTheme(newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar - Fixed */}
            <aside className="w-64 border-r bg-card p-6 flex flex-col gap-6 fixed top-0 left-0 h-screen overflow-y-auto">
                <div className="flex items-center justify-between">
                    <a href="#/styleguide" className="text-xl font-bold">
                        Design System
                    </a>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Toggle theme"
                    >
                        {activeTheme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>

                <nav className="flex flex-col gap-6">
                    {navigation.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-1">
                                {section.items.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={`#${item.href}`}
                                            className={`block px-3 py-2 rounded-md text-sm transition-colors ${currentPage === item.href
                                                ? 'bg-primary text-primary-foreground font-medium'
                                                : 'hover:bg-muted'
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main content - offset by sidebar width */}
            <main className="flex-1 ml-64 overflow-auto">
                {children}
            </main>
        </div>
    );
}
