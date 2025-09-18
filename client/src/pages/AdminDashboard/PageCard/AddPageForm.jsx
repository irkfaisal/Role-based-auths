import { useState } from "react"
import './styles/AddFormPage.css'

const AddPageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    route: "",
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Page name is required"
    }

    if (!formData.route.trim()) {
      newErrors.route = "Route is required"
    } else if (!formData.route.startsWith("/")) {
      newErrors.route = "Route must start with /"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Handle form submission
    console.log("Form submitted:", formData)

    // Reset form
    setFormData({
      name: "",
      route: "",
    })
    setErrors({})
  }

  return (
    <div className="add-page-container">
      <div className="add-page-card">
        <div className="add-page-header">
          <div className="logo">
            <div className="logo-icon">📄</div>
          </div>
          <h1 className="add-page-title">Create Page</h1>
          <p className="add-page-subtitle">Add a new page and define its route</p>
        </div>

        <form onSubmit={handleSubmit} className="add-page-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Page Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? "form-input-error" : ""}`}
                placeholder="Enter page name"
                required
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="route" className="form-label">
                Route*
              </label>
              <input
                type="text"
                id="route"
                name="route"
                value={formData.route}
                onChange={handleInputChange}
                className={`form-input ${errors.route ? "form-input-error" : ""}`}
                placeholder="Enter page route (e.g., /about)"
                required
              />
              {errors.route && <span className="error-message">{errors.route}</span>}
            </div>
          </div>

          <button type="submit" className="add-page-button">
            Create Page
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPageForm
