import PageHeader from "../header/PageHeader";

function CoffeeDisplay() {
    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>List Of Orders</h3>
            <div className="container">
                <table className="table table-info table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Category</th>
                            <th scope="col">Type</th>
                            <th scope="col">Sugar Level</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2025021101</th>
                            <td>small</td>
                            <td>instant</td>
                            <td>less</td>
                            <td>2</td>
                            <td>50</td>
                            <td>
                                <a href="/coffee/edit/202502111" className="btn btn-warning me-2">Edit</a>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2025021102</th>
                            <td>medium</td>
                            <td>filter</td>
                            <td>Normal</td>
                            <td>3</td>
                            <td>75</td>
                            <td>
                                <a href="/coffee/edit/202502112" className="btn btn-warning me-2">Edit</a>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default CoffeeDisplay;
