import { useState } from "react";

const AddPageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    route: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.route) {
      // Reset form
      setFormData({
        name: "",
        route: "",
      })
      alert("User added successfully!")
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Create Page and it's route</h2>
      </div>
      <form onSubmit={handleSubmit} className="add-user-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Page Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter page name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Route*</label>
            <input
              type="text"
              id="route"
              name="route"
              value={formData.route}
              onChange={handleInputChange}
              required
              placeholder="Enter Page route"
            />
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddPageForm
