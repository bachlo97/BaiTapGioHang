import React, { Component } from "react";

export default class ViewDetail extends Component {
  render() {
    const {product} = this.props
    return (
      <div className="row">
        <div className="col-5 d-flex flex-column align-items-center">
          <h2 className="text-center">{product.tenSP}</h2>
          <img src={product.hinhAnh} style={{ width: "300px" }} />
        </div>

        <div className="col-7">
          <h2 className="text-center">Thông số kĩ thuật</h2>
          <table className="table table-striped mt-4">
            <tbody>
              <tr>
                <td style={{ width: 200 }}>Màn hình</td>
                <td>{product.manHinh}</td>
              </tr>
              <tr>
                <td style={{ width: 200 }}>Hệ điều hành</td>
                <td>{product.heDieuHanh}</td>
              </tr>
              <tr>
                <td style={{ width: 200 }}>Camera Trước</td>
                <td>{product.cameraTruoc}</td>
              </tr>
              <tr>
                <td style={{ width: 200 }}>Camera Sau</td>
                <td>{product.cameraSau}</td>
              </tr>

              <tr>
                <td style={{ width: 200 }}>Ram</td>
                <td>{product.ram}</td>
              </tr>
              <tr>
                <td style={{ width: 200 }}>Rom</td>
                <td>{product.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
