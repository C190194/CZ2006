const Timetable = require('../models/timetable');
const User = require('../models/user');
const QRCode = require('qrcode');

const timetable_index=(req,res)=>{
    try {
        console.log(req);
        const email = req.body.email;
        user = User.findOne({email:email});
        return user.timetables;
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
};

const link_share=(req,res)=>{
    try {
        const timetableID = req.body.timetableID;
        const timetable = Timetable.findOne({timetableID:timetableID});
        link = JSON.stringify(timetable);
        return req.protocol + '://' + req.get('host') + link;
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
};

// const share_QR=async(req, res) => {
//     try {
//         // const link = link_share(req, res);
//         const link = "https://www.google.com";
//         const QR = QRCode.toDataURL(link, function (err, url) {
//             console.log(url)
//         });
//         return QR;
//     }
//     catch (err) {
//         res.status(400).send(err);
//         console.log(err);
//     }
// }

const export_settings=(req,res)=>{
    try {
        const timetableID = req.params.body;
        const timetable = Timetable.findOne({timetableID:timetableID});
        return timetable;
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
};

const download_ics=(req,res)=>{
    //read object
};

//exporting the functions
module.exports={
    timetable_index,
    link_share,
    // share_QR,
    export_settings,
    download_ics
};