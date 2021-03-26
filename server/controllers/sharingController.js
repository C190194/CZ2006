const Timetable = require('../models/timetable');
const User = require('../models/user');
const QRCode = require('qrcode');

const timetable_index=(req,res)=>{
    try {
        const email = req.params.email;
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
        const timetableID = req.params.body;
        const timetable = Timetable.findOne({timetableID:timetableID});
        link = JSON.stringify(timetable);
        return req.protocol + '://' + req.get('host') + link;
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
};

const share_mail=(req,res)=>{
    //https://stackoverflow.com/questions/40158943/sending-links-to-email-with-nodemailer-not-working
    //https://stackoverflow.com/questions/35012154/how-to-create-hyperlink-click-here-using-node-js
};

const share_QR=async(req, res) => {
    try {
    QR = QRCode.toDataURL(req, function (err, url) {
        console.log(url)
      });
    return QR;
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
}

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
    share_QR,
    share_mail,
    export_settings,
    download_ics
};