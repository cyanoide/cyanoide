import { useState, useCallback } from 'react'
import Menu from './components/Menu'
import ParticleCloud from './components/ParticleCloud'
import ThemeToggle from './components/ThemeToggle'
import Overlay from './components/Overlay'
import sites from './data/sites'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [selectedId, setSelectedId] = useState('cyanoide')

  const selectedSite = sites.find(s => s.id === selectedId) || sites[0]

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])

  const handleSelect = useCallback((id) => {
    setSelectedId(id)
  }, [])

  return (
    <div className={`app ${theme}`} data-theme={theme}>
      <div className="bg-grid" />

      {/* Toggle outside panel-left so fixed positioning works */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <div className="layout">
        <aside className="panel-left">
          <Menu
            sites={sites}
            selectedId={selectedId}
            onSelect={handleSelect}
            theme={theme}
          />
        </aside>

        <main className="panel-right">
          <ParticleCloud
            siteId={selectedSite.id}
            emoji={selectedSite.emoji}
            svgFile={selectedSite.svg}
            theme={theme}
          />

          <div className="site-info">
            <div className="site-info-label">{selectedSite.label}</div>
            {selectedSite.description && (
              <div className="site-info-description">{selectedSite.description}</div>
            )}
            {selectedSite.url !== '#' && (
              <div className="site-info-url">{selectedSite.url}</div>
            )}
          </div>
        </main>
      </div>

      <Overlay theme={theme} />
    </div>
  )
}
