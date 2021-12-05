//jshint esversion:6

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
const express = require("express");
const nodemailer = require("nodemailer");
//const mailer = require("@sendgrid/mail");

const bp = require("body-parser");
//const ejs = require("ejs");
//const cron = require("node-cron");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  //useFindAndModify: false
});

const GroupSchema = new mongoose.Schema({
    leaderName: String,
    leaderReg: String,
    name1: String,
    regno1: String,
    name2: String,
    regno2: String,
    name3: String,
    regno3: String,
    dept: String,
    phone: String,
    email: String
  });

const Gaming = mongoose.model("Gaming", GroupSchema);
const Treasure = mongoose.model("Treasure", GroupSchema);
const Reverse = mongoose.model("Reverse", GroupSchema);
const Marvel = mongoose.model("Marvel", GroupSchema);
const Auction = mongoose.model("Auction", GroupSchema);
const Connections = mongoose.model("Connections", GroupSchema);
const Legion = mongoose.model("Legion", GroupSchema);

const SoloSchema = new mongoose.Schema({
    name: String,
    reg: String,
    dept: String,
    phone: String,
    email: String,
    software: String
  });


const BigData = mongoose.model("BigData", SoloSchema);
const Placement = mongoose.model("Placement", SoloSchema);
const PairCoding = mongoose.model("PairCoding", SoloSchema);
const Debug = mongoose.model("Debug", SoloSchema);
const BlindCoding = mongoose.model("BlindCoding", SoloSchema);
const TechQuiz = mongoose.model("TechQuiz", SoloSchema);
const Softwhere = mongoose.model("Softwhere", SoloSchema);
const Math = mongoose.model("Math", SoloSchema);
const Photography = mongoose.model("Photography", SoloSchema);
const UI = mongoose.model("UI", SoloSchema);

const EventSchema = new mongoose.Schema({
  name: String,
  regno: String,
  dept: String,
  phone: String,
  email: String
});

// const Coding1 = mongoose.model("Coding", EventSchema);
// const Math = mongoose.model("Math", EventSchema);
// const Treasure = mongoose.model("Treasure", EventSchema);

// const Quiz = mongoose.model("Quiz", EventSchema);

// const Pair = mongoose.model("Pair", EventSchema);
// const Debug = mongoose.model("Debug", EventSchema);
// const Techq = mongoose.model("Techq", EventSchema);
// const Maineve = mongoose.model("Maineve", EventSchema);

const RevSchema = new mongoose.Schema({
  name1: String,
  regno1: String,
  name2: String,
  regno2: String,
  name3: String,
  regno3: String,
  phone: String,
  email: String
});
const RevCoding = mongoose.model("RevCoding", RevSchema);

const GameSchema = new mongoose.Schema({
  name1: String,
  regno1: String,
  name2: String,
  regno2: String,
  name3: String,
  regno3: String,
  name4: String,
  regno4: String,
  dept: String,
  phone: String,
  email: String
});
// const Gaming = mongoose.model("Gaming", GameSchema);
// const Ipl = mongoose.model("Ipl", GameSchema);
// const Connections = mongoose.model("Connections", GameSchema);

app.get("/", function (req, res) {
  res.render("index");
});

//-------------------------------------------------
//Today's work
//-------------------------------------------------

app.get("/events", function (req, res) {
    res.render("events");
  });

  app.post("/form", function (req, res) {
    var Etitle = req.body.title;
    res.render("form", {title: Etitle});
  });
  
  app.post("/form2", function (req, res) {
    var Etitle = req.body.title;
    res.render("form2", {title: Etitle});
  });

  app.post("/success", function (req, res) {
    var Etitle = req.body.event;
    var leaderName = req.body.name;
    var leaderReg = req.body.rollno;
    var member1 = req.body.name1;
    var reg1 = req.body.rollno1;
    var member2 = req.body.name2;
    var reg2 = req.body.rollno2;
    var dept = req.body.dept;
    var mail = req.body.email;
    var phone = req.body.phone;
    var event = req.body.event;
    if(Etitle === "gaming")
    {
        var member3 = req.body.name3;
        var reg3 = req.body.rollno3;
        const game = new Gaming({
            leaderName: leaderName,
    leaderReg: leaderReg,
    name1: member1,
    regno1: reg2,
    name2: member2,
    regno2: reg2,
    name3: member3,
    regno3: reg3,
    dept: dept,
    phone: phone,
    email: mail
          });
          game.save();
          event = "Gmaing";
    }

    else if(Etitle === "Treasurehunt")
    {
        
    const hunt = new Treasure({
    leaderName: leaderName,
    leaderReg: leaderReg,
    name1: member1,
    regno1: reg2,
    name2: member2,
    regno2: reg2,
    dept: dept,
    phone: phone,
    email: mail
          });
          hunt.save();
          event = "Treasure Hunt";
    }
    else if(Etitle === "MarvelQuiz")
    {
        
    const marv = new Marvel({
    leaderName: leaderName,
    leaderReg: leaderReg,
    name1: member1,
    regno1: reg2,
    name2: member2,
    regno2: reg2,
    dept: dept,
    phone: phone,
    email: mail
          });
          mar.save();
          event = "Marvel Quiz";
    }
    else if(Etitle === "IPLAuction")
    {
        
    const ipl = new Auction({
    leaderName: leaderName,
    leaderReg: leaderReg,
    name1: member1,
    regno1: reg2,
    name2: member2,
    regno2: reg2,
    dept: dept,
    phone: phone,
    email: mail
          });
          ipl.save();
          event = "IPL Auction";
    }
    else if(Etitle === "Connexions")
    {
        
    const con = new Connections({
    leaderName: leaderName,
    leaderReg: leaderReg,
    name1: member1,
    regno1: reg2,
    name2: member2,
    regno2: reg2,
    dept: dept,
    phone: phone,
    email: mail
          });
          con.save();
          event = "Connexions";
    }
    else if(Etitle === "reversecoding")
    {
        
    const revcode = new Reverse({
    leaderName: leaderName,
    leaderReg: leaderReg,
    name1: member1,
    regno1: reg2,
    name2: member2,
    regno2: reg2,
    dept: dept,
    phone: phone,
    email: mail
          });
          revcode.save();
          event = "Reverse Coding";
    }
    else if(Etitle === "Legion")
    {
        
    const leg = new Legion({
    leaderName: leaderName,
    leaderReg: leaderReg,
    name1: member1,
    regno1: reg2,
    name2: member2,
    regno2: reg2,
    dept: dept,
    phone: phone,
    email: mail
          });
          leg.save();
          event = "Legion";
    }

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.mailid,
          pass: process.env.pass
        }
      });
      
      var str = "Dear "+leaderName+"! Thank you for your registration. You and Your team has been successfully registered for "+event+". Stay motivated and we wish you all the very best!!\nThanks Regards, ITA";
      var mailOptions = {
        from: process.env.mailid,
        to: mail,
        subject: "Mutex 2021",
        text: str
      };
    
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.redirect("/success");
  });


  app.post("/success-solo", function (req, res) {
    var Etitle = req.body.event;
    var name = req.body.name;
    var reg = req.body.regno;
    var dept = req.body.dept;
    var mail = req.body.email;
    var phone = req.body.phone;
    var event = req.body.event;
    console.log(Etitle);
    if(Etitle === "softwhere")
    {
    var software = req.body.software;

    const soft = new Softwhere({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail,
    software: software
    });
    soft.save();
    event = "Soft-Where";
    }
    else if(Etitle === "bigdata")
    {
    const bdata = new BigData({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    bdata.save();
    event = "Big Data";
    }
    else if(Etitle === "placement")
    {
    const place = new Placement({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    place.save();
    event = "Placement";
    }
    else if(Etitle === "Paircoding")
    {
    const pair = new PairCoding({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    pair.save();
    event = "Pair Coding";
    }
    else if(Etitle === "Debug")
    {
    const dbug = new Debug({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    dbug.save();
    event = "Debug";
    }
    else if(Etitle === "Blindcoding")
    {
    const blindcode = new BlindCoding({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    blindcode.save();
    event = "Blind Coding";
    }
    else if(Etitle === "Techquiz")
    {
    const tquiz = new TechQuiz({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    tquiz.save();
    event = "Technical Quiz";
    }
    else if(Etitle === "Mathomania")
    {
    const mania = new Math({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    mania.save();
    event = "Math-O-Mania";
    }
    else if(Etitle === "Photography")
    {
    const photo = new Photography({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    photo.save();
    event = "Photography";
    }

    else if(Etitle === "ui")
    {
    const design = new UI({
    name: name,
    reg: reg,
    dept: dept,
    phone: phone,
    email: mail
    });
    design.save();
    event = "UI/UX Design";
    }

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.mailid,
          pass: process.env.pass
        }
      });
      var str = "Dear " + name + "! Thank you for your registration. You have been successfully registered for "+event+". Stay motivated and we wish you all the very best!!\nThanks Regards, ITA";
      var mailOptions = {
        from: process.env.mailid,
        to: mail,
        subject: "Mutex 2021",
        text: str
      };
    
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.redirect("/success");
  });

  app.get("/success", function (req, res) {
    res.render("success");
  });


//--------------------------------------------------

app.get("/event1", function (req, res) {
  res.render("event1", { title: "/event1" });
});

app.get("/reverse", function (req, res) {
  res.render("reverse", { title: "reverse" });
});

app.get("/gaming", function (req, res) {
  res.render("gaming", { title: "gaming" });
});

let port = process.env.PORT;
if(port == null || port == "")
port = 8080;
app.listen(port, function () {
  console.log("server has been started successfully");
});

app.post("/event1", function (req, res) {
  var name = req.body.uname;
  var reg = req.body.regno;
  var dept = req.body.dept;
  var phone = req.body.phone;
  var mail = req.body.email;

  const item1 = new Coding1({
    name: name,
    regno: reg,
    dept: dept,
    phone: phone,
    email: mail
  });
  item1.save();

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.mailid,
      pass: process.env.pass
    }
  });
  var str = "Hi " + name + "! You have registered successfuly";

  var mailOptions = {
    from: process.env.mailid,
    to: mail,
    subject: "Mutex 2021",
    text: str
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.redirect("/success");
});

app.get("/success", function (req, res) {
  res.render("success");
});

//-----------------------------
//Non-Tech Events
//-----------------------------

app.get("/non-tech/:event", function (req, res) {
  res.render("non-tech", { title: req.params.event });
});

app.post("/non-tech", function (req, res) {
  var dept = req.body.dept;
  var phone = req.body.phone;
  var mail = req.body.email;
  var event = req.body.event;

  if (event === "math") {
    var name = req.body.uname;
    var reg = req.body.regno;
    const math = new Math({
      name: name,
      regno: reg,
      dept: dept,
      phone: phone,
      email: mail
    });
    event = "Math-O-Mania";
    math.save();
  } else if (event === "ipl") {
    var n1 = req.body.name1;
    var r1 = req.body.regno1;
    var n2 = req.body.name2;
    var r2 = req.body.regno2;
    var n3 = req.body.name3;
    var r3 = req.body.regno3;
    const auction = new Ipl({
      name1: n1,
      regno1: r1,
      name2: n2,
      regno2: r2,
      name3: n3,
      regno3: r3,
      dept: dept,
      phone: phone,
      email: mail
    });
    name = n1;
    event = "IPL Auction";
    auction.save();
  } else if (event === "treasure-hunt") {
    var name = req.body.uname;
    var reg = req.body.regno;
    const hunt = new Treasure({
      name: name,
      regno: reg,
      dept: dept,
      phone: phone,
      email: mail
    });
    event = "Treasure Hunt";
    hunt.save();
  } else if (event === "quiz") {
    var name = req.body.uname;
    var reg = req.body.regno;
    const quizz = new Quiz({
      name: name,
      regno: reg,
      dept: dept,
      phone: phone,
      email: mail
    });
    event = "Quiz";
    quizz.save();
  } else if (event === "connections") {
    var n1 = req.body.name1;
    var r1 = req.body.regno1;
    var n2 = req.body.name2;
    var r2 = req.body.regno2;
    const con = new Connections({
      name1: n1,
      regno1: r1,
      name2: n2,
      regno2: r2,
      dept: dept,
      phone: phone,
      email: mail
    });
    name = n1;
    event = "Connections";
    con.save();
  } else if (event === "gaming") {
    var n1 = req.body.name1;
    var r1 = req.body.regno1;
    var n2 = req.body.name2;
    var r2 = req.body.regno2;
    var n3 = req.body.name3;
    var r3 = req.body.regno3;
    var n4 = req.body.name4;
    var r4 = req.body.regno4;
    const game = new Gaming({
      name1: n1,
      regno1: r1,
      name2: n2,
      regno2: r2,
      name3: n3,
      regno3: r3,
      name4: n4,
      regno4: r4,
      dept: dept,
      phone: phone,
      email: mail
    });
    event = "Gaming";
    name = n1;
    game.save();
  }

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.mailid,
      pass: process.env.pass
    }
  });
  var str = "Hi " + name + "! You have registered successfuly for " + event;
  if (event === "Gaming" || event === "IPL Auction" || event === "Connections")
    str = "Hi!! Your team has registered successfully";
  var mailOptions = {
    from: process.env.mailid,
    to: mail,
    subject: "Mutex 2021",
    text: str
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.redirect("/success");
});

app.get("/success", function (req, res) {
  res.render("success");
});

//----------------------------------
//---------Tech events--------------

app.get("/tech/:event", function (req, res) {
  res.render("tech", { title: req.params.event });
});

app.post("/tech", function (req, res) {
  var name = req.body.uname;
  var reg = req.body.regno;
  var dept = req.body.dept;
  var phone = req.body.phone;
  var mail = req.body.email;
  var event = req.body.event;

  if (event === "pair") {
    const pair = new Pair({
      name: name,
      regno: reg,
      dept: dept,
      phone: phone,
      email: mail
    });
    event = "Pair-Coding";
    pair.save();
  } else if (event === "debug") {
    const debug = new Debug({
      name: name,
      regno: reg,
      dept: dept,
      phone: phone,
      email: mail
    });
    event = "Debugging";
    debug.save();
  } else if (event === "techquiz") {
    const techq = new Techq({
      name: name,
      regno: reg,
      dept: dept,
      phone: phone,
      email: mail
    });
    event = "Tech Quiz";
    techq.save();
  } else if (event === "mainevent") {
    const maineve = new Maineve({
      name: name,
      regno: reg,
      dept: dept,
      phone: phone,
      email: mail
    });
    event = "Main Event";
    maineve.save();
  }

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.mailid,
      pass: process.env.pass
    }
  });

  var str = "Hi " + name + "! You have registered successfuly for " + event;
  var mailOptions = {
    from: process.env.mailid,
    to: mail,
    subject: "Mutex 2021",
    text: str
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.redirect("/success");
});

//------group events--------

app.post("/reverse", function (req, res) {
  var name1 = req.body.name1;
  var reg1 = req.body.regno1;
  var name2 = req.body.name2;
  var reg2 = req.body.regno2;
  var name3 = req.body.name3;
  var reg3 = req.body.regno3;
  var phone = req.body.phone;
  var mail = req.body.email;

  const revcoding = new RevCoding({
    name1: name1,
    regno1: reg1,
    name2: name2,
    regno2: reg2,
    name3: name3,
    regno3: reg3,
    phone: phone,
    email: mail
  });
  revcoding.save();

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.mailid,
      pass: process.env.pass
    }
  });
  var str = "Hi!! Your team has registered successfully";

  var mailOptions = {
    from: process.env.mailid,
    to: mail,
    subject: "Mutex 2021",
    text: str
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.redirect("/success");
});
