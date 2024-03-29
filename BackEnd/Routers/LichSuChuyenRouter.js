const express = require('express');
const LichSuChuyenRouter = express.Router();
const { ObjectId } = require('mongodb');
const { db } = require('../db')




LichSuChuyenRouter.post("/", async(req, res) => {
    const VatTu = {
        SanPham: [req.body.hoadon],

        ChiNhanh: req.body.ChiNhanh,
        ChiNhanhXuatPhat: req.body.Tenchinhanh,
        NgayChuyen: new Date(req.body.NgayChuyen),
    };
    const result = await db.LichSuChuyen.insertOne(VatTu);

    if (!result) {
        res.json({
            status: "FAILED",
            message: "Không thành công"
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "thành công",
            data: VatTu
        })
    }
})


LichSuChuyenRouter.get("/", async(req, res) => {
    const chinhanh = req.params.chinhanh;
    const result = await db.LichSuChuyen.find({

    }).toArray();

    if (!result) {
        res.json({
            status: "FAILED",
            message: "Không thành công"
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "thành công",
            data: result
        })
    }
})


LichSuChuyenRouter.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const filter = {
        _id: new ObjectId(id)
    }
    const updateDoc = {
        $set: body
    }
    const result = await db.LichSuChuyen.deleteOne(filter);

    if (!result) {
        res.json({
            status: "FAILED",
            message: "Không thành công"
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "thành công",
            data: result
        })
    }
})

module.exports = LichSuChuyenRouter;