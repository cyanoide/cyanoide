import { useState, useEffect } from 'react'

function SiteIcon({ site, theme }) {
  const [svgContent, setSvgContent] = useState(null)

  useEffect(() => {
    if (!site.svg) return
    fetch(`./svg/${site.svg}`)
      .then(r => { if (r.ok) return r.text(); throw new Error() })
      .then(text => {
        // Strip XML declaration and DOCTYPE, keep just the <svg> tag
        const cleaned = text
          .replace(/<\?xml[^?]*\?>/g, '')
          .replace(/<!DOCTYPE[^>]*>/g, '')
          .trim()
        setSvgContent(cleaned)
      })
      .catch(() => setSvgContent(null))
  }, [site.svg])

  if (svgContent) {
    // Inject currentColor so the SVG inherits the menu text/accent color
    const colored = svgContent
      .replace(/fill="#000000"/g, 'fill="currentColor"')
      .replace(/fill="black"/g, 'fill="currentColor"')
      .replace(/fill="#000"/g, 'fill="currentColor"')
      .replace(/stroke="#000000"/g, 'stroke="currentColor"')
      .replace(/stroke:"#000000"/g, 'stroke:"currentColor"')
      .replace(/stroke:#000000/g, 'stroke:currentColor')

    return (
      <span
        className="menu-item-icon"
        dangerouslySetInnerHTML={{ __html: colored }}
      />
    )
  }

  return <span className="menu-item-icon menu-item-emoji">{site.emoji}</span>
}

export default function Menu({ sites, selectedId, onSelect, theme }) {
  const [hoveredId, setHoveredId] = useState(null)
  const [visibleItems, setVisibleItems] = useState(0)
  const [typedTitle, setTypedTitle] = useState('')

  // Typewriter effect for title
  useEffect(() => {
    const title = 'CYANOIDE'
    let idx = 0
    setTypedTitle('')
    const interval = setInterval(() => {
      idx++
      setTypedTitle(title.slice(0, idx))
      if (idx >= title.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  // Staggered menu items appearance
  useEffect(() => {
    setVisibleItems(0)
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev >= sites.length) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 60)
    return () => clearInterval(timer)
  }, [sites.length])

  const handleClick = (site) => {
    onSelect(site.id)
  }

  const handleDoubleClick = (site) => {
    if (site.url !== '#') {
      window.open(site.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <nav className="menu">
      {/* Title */}
      <div className="menu-header">
        <div className="menu-title-line" />
        <h1 className="menu-title">
          {typedTitle}
          <span className="cursor-blink">_</span>
        </h1>
        <div className="menu-subtitle">GATEWAY // PORTAL</div>
        <div className="menu-title-line" />
      </div>

      {/* Decorative */}
      <div className="menu-decorator">
        <span className="decorator-bracket">[</span>
        <span className="decorator-dots">
          {'● '.repeat(3)}{'○ '.repeat(3)}
        </span>
        <span className="decorator-bracket">]</span>
      </div>

      {/* Site list */}
      <ul className="menu-list">
        {sites.map((site, index) => {
          const isSelected = selectedId === site.id
          const isHovered = hoveredId === site.id
          const isVisible = index < visibleItems

          return (
            <li
              key={site.id}
              className={`menu-item ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`}
              onMouseEnter={() => setHoveredId(site.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleClick(site)}
              onDoubleClick={() => handleDoubleClick(site)}
            >
              <span className="menu-item-indicator">
                {isSelected ? '▸' : '·'}
              </span>
              <SiteIcon site={site} theme={theme} />
              <span className="menu-item-label">{site.label}</span>
              {isSelected && (
                <span className="menu-item-arrow">→</span>
              )}
            </li>
          )
        })}
      </ul>

      {/* Footer info */}
      <div className="menu-footer">
        <div className="menu-title-line" />
        <div className="menu-footer-text">
          CLICK SELECT // DOUBLE-CLICK OPEN
        </div>
        <div className="menu-footer-text">
          SYS.VER 2.0.26 — {sites.length} NODES
        </div>
      </div>
    </nav>
  )
}
