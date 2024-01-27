import React, { Component } from "react";

export default class PhoneCard extends Component {
  render() {
    const {product,handleState,themGioHang} = this.props
    return (
      <div className="card border border-2 border-secondary rounded-3" style={{ width: "21rem" }}>
        <img src={product.hinhAnh} className="card-img-top" width={300} height={350} alt="..." />
        <div className="card-body" style={{backgroundColor: '#394f6f'}}>
          <h5 className="card-title text-white">{product.tenSP}</h5>
          <p className="card-text text-white">
            {new Intl.NumberFormat('vn-VN').format(product.giaBan)+ ' VNĐ'}
          </p>
            <button className="btn btn-primary" style={{fontSize:'14px'}} onClick={()=>{
              handleState(product)
            }}>
            <i className="fa-regular fa-eye me-1"></i>
                 Xem chi tiết
                </button>
            <button className="btn btn-success ms-2" style={{fontSize:'14px'}} onClick={()=>{themGioHang(product)}}>
            <i className="fa-solid fa-cart-shopping me-1"></i>
                 Thêm vào giỏ hàng
                </button>
        </div>
      </div>
    );
  }
}
