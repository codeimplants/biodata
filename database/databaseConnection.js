const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://codeImplants:Bpc3PxYoK1IsfTpF@biodata.yr4nn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  )
  .then(() => {
    console.log("Connection is Successful");
  })
  .catch((e) => {
    console.log(e,"No Connection");
  });
