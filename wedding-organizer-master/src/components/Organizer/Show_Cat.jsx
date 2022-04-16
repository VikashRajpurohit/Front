import React from 'react'

const Show_Cat = () => {
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
                <th>Service_Category_Name</th>
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
                    <span>Name of Service</span>
                    <span>Detlis of Service</span>
                  </div>
                </td>
                <td>
                  <div className="email">
                  <span>Name of Service Catogery</span>
                    <span>Detlis of Service Catogery</span>
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

export default Show_Cat