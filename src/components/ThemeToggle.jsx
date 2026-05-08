export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Switch to night mode' : 'Switch to day mode'}
    >
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${theme}`}>
          {theme === 'light' ? '☀' : '☾'}
        </span>
      </span>
      <span className="theme-toggle-label">
        {theme === 'light' ? 'DAY' : 'NIGHT'}
      </span>
    </button>
  )
}
