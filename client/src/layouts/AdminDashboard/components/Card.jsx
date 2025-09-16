import { useNavigate } from "react-router-dom";
import { stats } from "../../../constants/Data"
import "../styles/Card.css"

const Card = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  }

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} onClick={() => handleCardClick(stat.path)} className="stat-card" style={{ borderTopColor: stat.color }}>
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

