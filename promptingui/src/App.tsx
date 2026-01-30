// Import styles
import './App.css'
import { useEffect, useState } from 'react'
import StyleguidePage from './styleguide/StyleguidePage'
import TableShowcase from './styleguide/TableShowcase'
import BarChartShowcase from './styleguide/BarChartShowcase'
import SidebarShowcase from './styleguide/SidebarShowcase'


const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple hash-based routing
  if (currentPath === '#/styleguide' || currentPath === '#/styleguide/') {
    return <StyleguidePage />;
  }

  if (currentPath === '#/styleguide/components/table') {
    return <TableShowcase />;
  }

  if (currentPath === '#/styleguide/components/bar-chart') {
    return <BarChartShowcase />;
  }

  if (currentPath === '#/styleguide/components/sidebar') {
    return <SidebarShowcase />;
  }

  return (
    <div className="app min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className='text-5xl font-bold'>
          Crypto Design System
        </h1>
        <p className="text-xl text-muted-foreground">
          Modern, bold, high-contrast design system
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a
            href="#/styleguide"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View Styleguide
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

