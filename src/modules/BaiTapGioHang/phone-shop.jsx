import React, { Component } from "react";
import PhoneCard from "./phone-card";
import ViewDetail from "./view-detail";
import Cart from "./cart";
import Modal from "./modal";

const products = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class PhoneShop extends Component {
  constructor() {
    super();
    this.state = {
      product: products[0],
      gioHang: [],
      modal: {
        title: "",
        content: "",
        open: false,
        onClose: null,
        onOK: null,
      },
    };
  }

  themGioHang = (pd) => {
    const newGioHang = [...this.state.gioHang];
    let pdExist = this.state.gioHang.find((sp) => {
      return sp.maSP === pd.maSP;
    });
    if (pdExist) {
      pdExist.soLuong += 1;
    } else {
      pdExist = { ...pd, soLuong: 1 };
      newGioHang.push(pdExist);
    }
    console.log(newGioHang);
    this.setState({
      gioHang: newGioHang,
    });
  };

  tangGiamSoLuong = (msp, type) => {
    const index = this.state.gioHang.findIndex((p) => p.maSP === msp);
    const newGioHang = [...this.state.gioHang];
    const product = newGioHang[index];
    if (type === true) {
      product.soLuong += 1;
    } else {
      if (product.soLuong === 1) {
        // xoa san pham
        this.xoaGioHang(product);
        return;
      } else {
        product.soLuong -= 1;
      }
    }

    this.setState({
      gioHang: newGioHang,
    });
  };

  closeModal = () => {
    this.setState({
      modal: {
        open: false,
      },
    });
  };

  xoaGioHang = (pd) => {
    this.setState({
      modal: {
        title: "Xóa Sản Phẩm",
        content: "Bạn có chắc chắn muốn xóa sản phẩm hay không?",
        open: true,
        onClose: this.closeModal,
        onOK: () => {
          const newGioHang = this.state.gioHang.filter((sp) => {
            return sp.maSP !== pd.maSP;
          });

          this.setState({
            gioHang: newGioHang,
          });

          this.closeModal();
        },
      },
    });
  };

  renderProducts = () => {
    return products.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <PhoneCard
            product={product}
            handleState={(product) => {
              this.setState({ product });
            }}
            themGioHang={this.themGioHang}
          />
        </div>
      );
    });
  };
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <Cart
          gioHang={this.state.gioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
          showMessage={this.showMessage}
          xoaGioHang={this.xoaGioHang}
        />
        <Modal
          title={this.state.modal.title}
          content={this.state.modal.content}
          onClose={this.state.modal.onClose}
          onOK={this.state.modal.onOK}
          open={this.state.modal.open}
        />
        <div
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          style={{
            width: "40px",
            height: "60px",
            marginLeft: "auto",
            marginTop: "10px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              fontSize: "44px",
              lineHeight: "40px",
            }}
          >
            <i
              className="fa-solid fa-bag-shopping"
              style={{ color: "#39a1c0" }}
            ></i>
          </div>
          <span
            style={{
              color: "white",
              position: "absolute",
              top: "52%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              fontSize: "15px",
            }}
          >
            {tongSoLuong}
          </span>
        </div>
        <div className="row">{this.renderProducts()}</div>

        <hr className="mt-5" />

        <ViewDetail product={this.state.product} />
      </div>
    );
  }
}
