import PageHeader from "../header/PageHeader";

function CoffeeEdit() {
  return (
    <>
      <PageHeader PageNumber={1} />
      <h3>Edit Order</h3>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <input type="text" className="form-control" id="category" placeholder="Enter category" required />
        </div>
      </div>

      <div className="container">
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type:</label>
          <select className="form-select" id="type" required>
            <option value="" disabled selected>Select type</option>
            <option value="Instant">Instant</option>
            <option value="Filter">Filter</option>
          </select>
        </div>
      </div>

      <div className="container">
        <div className="mb-3">
          <label htmlFor="sugar" className="form-label">Sugar Level:</label>
          <select className="form-select" id="sugar" required>
            <option value="" disabled selected>Select sugar level</option>
            <option value="No">No</option>
            <option value="Less">Less</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
      </div>

      <div className="container">
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity:</label>
          <input type="number" className="form-control" id="quantity" placeholder="Please enter quantity" min="1" required />
        </div>
      </div>

      <div className="container">
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Total Amount:</label>
          <input type="number" className="form-control" id="price" placeholder="Enter Amount" min="0" step="5" required />
        </div>
        <button className="btn btn-success">Update</button>
        <a href="/coffee/display" className="btn btn-warning">Go Back</a>
      </div>

    </>
  )
}
export default CoffeeEdit;