import React from 'react'

const demo = () => {
  return (
    <section className="ftco-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3 className="h5 mb-4 text-center">Show Services</h3>
        <div className="table-wrap">
          <table className="table">
            <thead className="thead-primary">
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Service_Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>total</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr className="alert" role="alert">
                <td>
                  <label className="checkbox-wrap checkbox-primary">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </td>
                <td>
                  <div className="img" style={{backgroundImage: 'url(./images/bg.jpg)'}} />
                </td>
                <td>
                  <div className="email">
                    <span>Sneakers Shoes 2020 For Men </span>
                    <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                  </div>
                </td>
                <td>$44.99</td>
                <td className="quantity">
                  <div className="input-group">
                    <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={2} min={1} max={100} />
                  </div>
                </td>
                <td>$89.98</td>
                <td>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true"><i className="fa fa-close" /></span>
                  </button>
                </td>
              </tr>
              <tr className="alert" role="alert">
                <td>
                  <label className="checkbox-wrap checkbox-primary">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </td>
                <td>
                  <div className="img" style={{backgroundImage: 'url(./images/bg.jpg)'}} />
                </td>
                <td>
                  <div className="email">
                    <span>Sneakers Shoes 2020 For Men </span>
                    <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                  </div>
                </td>
                <td>$44.99</td>
                <td className="quantity">
                  <div className="input-group">
                    <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={2} min={1} max={100} />
                  </div>
                </td>
                <td>
                  <div className="input-group">
                    <input type="text" name="Price" className="quantity form-control input-number" defaultValue={500} min={1} max={5000} />
                  </div>
                  </td>
                <td>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true"><i className="fa fa-close" /></span>
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default demo