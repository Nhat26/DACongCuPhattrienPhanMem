const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://khanh:khanhdieuanh@cluster0.bih1rvn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "QuanLyCHYTE"
const db = {}

async function connectToDb() {
    await client.connect();
    console.log('Connected successfully to Database');
    const database = client.db(dbName);

    db.TaiKhoan = database.collection("TaiKhoan");
    db.VatTu = database.collection("VatTu");
    db.TinNhan = database.collection("TinNhan");
    db.HoaDon = database.collection("HoaDon");
    db.ThongBao=database.collection("ThongBao");
    db.Luong=database.collection("Luong");
    db.LuongQL=database.collection("LuongQL");
    db.PhieuDKChuyen= database.collection("PhieuDKChuyen");
    db.NhanVien = database.collection("NhanVien");
    db.PhieuChamCong = database.collection("PhieuChamCong");
    db.LichSuChuyen = database.collection("LichSuChuyen");
    db.PhieuChuyen = database.collection("PhieuChuyen");
    db.QuanLy = database.collection("QuanLy");
    return 'done.';
}

module.exports = { connectToDb, db }