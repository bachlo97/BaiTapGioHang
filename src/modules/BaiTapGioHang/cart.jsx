import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const {gioHang,tangGiamSoLuong,xoaGioHang} = this.props
    return (
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div
              className="modal-content"
              style={{
                maxWidth: "800px",
                width: "800px",
                transform: "translateX(300px)",
              }}
            >
              <div className="modal-header" style={{backgroundColor:'#4a6b77'}}>
                <h5 className="modal-title text-white" id="modalTitleId">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table table-striped">
                  <thead>
                    <tr className="text-center">
                      <td>Mã SP</td>
                      <td>Hình ảnh</td>
                      <td>Tên SP</td>
                      <td>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {gioHang.map((spGH, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGH.maSP}</td>
                          <td>
                            <img
                              src={spGH.hinhAnh}
                              width={50}
                              height={75}
                              alt=""
                            />
                          </td>
                          <td>{spGH.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary me-2"
                              onClick={() => {
                                tangGiamSoLuong(spGH.maSP, true);
                              }}
                            >
                              +
                            </button>
                            {spGH.soLuong}
                            <button
                              className="btn btn-primary ms-2"
                              onClick={() => {
                                tangGiamSoLuong(spGH.maSP, false);
                              }}
                            >
                              -
                            </button>
                          </td>
                          <td>{spGH.giaBan.toLocaleString()}</td>
                          <td>
                            {(spGH.soLuong * spGH.giaBan).toLocaleString()}
                          </td>
                          <td>
                            <button
                              onClick={() => xoaGioHang(spGH)}
                              className="btn btn-danger"
                            >
                              Xoá
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot style={{border:'transparent'}}>
                    <tr>
                      <td colSpan={5}></td>
                      <td><b>Tổng tiền</b></td>
                      <td>
                        <i>
                          {this.props.gioHang
                            .reduce((tongTien, spGioHang, index) => {
                              return (tongTien +=
                                spGioHang.soLuong * spGioHang.giaBan);
                            }, 0)
                            .toLocaleString()+' VNĐ'}
                        </i>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
