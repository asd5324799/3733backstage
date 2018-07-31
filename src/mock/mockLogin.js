// /mockLogin.js
import Mock from "mockjs";

const account = {
  user: "admin",
  password: "123456",
  verification: "v9am"
};
const produceData = function(opt) {
  let opt1 = JSON.parse(opt.body);
  if (
    opt1.user === account.user &&
    opt1.password === account.password &&
    opt1.verification === account.verification
  ) {
    return "1";
  } else {
    return "0";
  }
};
Mock.mock("/mock/user", produceData);
