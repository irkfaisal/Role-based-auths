import "../styles/Card.css"

const Card = () => {
  const stats = [
    {
      title: "Users",
      count: 1234,
      icon: "👥",
      color: "#3b82f6",
    },
    {
      title: "Pages",
      count: 89,
      icon: "📄",
      color: "#10b981",
    },
    {
      title: "Franchisee",
      count: 45,
      icon: "🏢",
      color: "#f59e0b",
    },
    {
      title: "Roles",
      count: 12,
      icon: "🔐",
      color: "#ef4444",
    },
  ]

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card" style={{ borderTopColor: stat.color }}>
          <div className="stat-icon" style={{ backgroundColor: `${stat.color}20` }}>
            <span style={{ color: stat.color }}>{stat.icon}</span>
          </div>
          <div className="stat-content">
            <h3>{stat.count.toLocaleString()}</h3>
            <p>{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card

