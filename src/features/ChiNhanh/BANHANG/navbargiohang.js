import './navbarbanhang.css'


import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';

import DieuHuong from "../../../components/DieuHuong/Dieuhuong"
import BanHang from './BanHang'
import Cart from './cart'



const Navbargiohang = () => {

  const phanquyen = localStorage.getItem("Vaitro")
  console.log("phanquya", phanquyen);
  var b = JSON.stringify(phanquyen);
  var k = "QuanLy"
  var Xep = true;
  var li = false
  if (phanquyen === "QuanLyKho") {
    Xep = false;
    li = true;
  }

  const [show, setshow] = useState(true);
  const [cart, setCart] = useState([]);
  const [isToggledd, setisToggledd] = useState(false);
  var Tenchinhanh = localStorage.getItem("TenChiNhanh");
  console.log("chinhanh", Tenchinhanh);
  var ChiNhanh = Tenchinhanh;
  const Hovernut = () => {
    setisToggledd(true);
  }
  const TatHovernut = () => {
    setisToggledd(false);
  }
  // const handleclickgiohang = (item) => {
  //   cart.push(item);
  //   console.log("bien carrt", cart)

  // }
  const handleclickgiohang = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].SoLuong = arr[ind].SoLuong + d;

    if (arr[ind].SoLuong === 0) arr[ind].SoLuong = 1;
    setCart([...arr]);
  };

  var KhoaNhanVien = localStorage.getItem("Vaitro")
  console.log("KhoaNhanVien", KhoaNhanVien)
  if (KhoaNhanVien === "NhanVien") {
    console.log("KhoaNhanVienif")
    Xep = false;
  }

  return (
    <div>
      <nav>
        <div className="nav_box">
          {/* {Xep &&
      <button style={{position:'relative',right:"120px"}} onClick={() => TatHovernut() }><i style={{color:"Azure"}} class="fa fa-arrow-circle-left"></i></button>}
      {Xep &&<button style={{position:'relative',right:"160px"}} onClick={() => Hovernut() }><i style={{color:"Azure"}} class="fa fa-arrow-circle-right"></i></button>} */}
          <h1 style={{ color: "Azure" }} > <b><i>Chào Mừng Đến Chi Nhánh: {Tenchinhanh}</i></b> </h1>
          {Xep &&
            <section>
              {isToggledd && <DieuHuong />}
            </section>}
          <span className="my_shop" onClick={() => setshow(true)}>
            sanpham
          </span>
          <div className="cart" onClick={() => setshow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{cart.length}</span>
          </div>
        </div>
      </nav>
      {show ? (<BanHang handleclickgiohang={handleclickgiohang} />) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
};

export default Navbargiohang;