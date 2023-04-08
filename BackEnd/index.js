const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { connectToDb, db } = require('./db');
const VatTuRouter = require("./Routers/VatTuRouter");
const HoaDonRouter = require("./Routers/HoaDonRouter");
const TinNhanRouter = require("./Routers/TinNhanRouter");
const TaiKhoanRouter = require("./Routers/TaiKhoanRouter");
const ThongBaoRouter = require("./Routers/ThongBaoRouter");
const LuongRouter = require("./Routers/LuongRouter");
const LuongQLRouter = require("./Routers/LuongQLRouter");
const PhieuDKChuyenRouter = require("./Routers/PhieuDKChuyenRouter");
const NhanvienRouters = require('./Routers/NhanvienRouter');
const PhieuChamCongRouter = require('./Routers/PhieuChamCongRouter');
const LichSuChuyenRouter = require("./Routers/LichSuChuyenRouter");
const PhieuChuyenRouter = require("./Routers/PhieuChuyenRouter")
const QuanLyRouter = require("./Routers/QuanlyRouter")
var cors = require('cors');


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(express.json());
app.use("/TaiKhoan", TaiKhoanRouter);
app.use("/Nhanvien", NhanvienRouters);
app.use("/LichSuChuyen", LichSuChuyenRouter);
app.use("/VatTu", VatTuRouter);
app.use("/HoaDon", HoaDonRouter);
app.use("/TinNhan", TinNhanRouter);
app.use("/ThongBao", ThongBaoRouter);
app.use("/Luong", LuongRouter);
app.use("/LuongQL",LuongQLRouter);
app.use("/PhieuDKChuyen",PhieuDKChuyenRouter);
app.use("/PhieuChamCong",PhieuChamCongRouter);
app.use("/PhieuChuyenRouter",PhieuChuyenRouter);
app.use("/PhieuChuyenRouter",QuanLyRouter);
app.get('/', (req, res) => {
    res.json('Hello world')
})


app.post('/Login', async(req, res) => {
    console.log(req.body)
    const respond = await db.TaiKhoan.findOne(req.body)
    res.status(200)
    res.json(respond)
})


const port = process.env['PORT'] || 5001
app.listen(port, () => {
    console.log('App is running on port 3000', port);
    connectToDb()
})