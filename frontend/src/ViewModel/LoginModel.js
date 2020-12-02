import { UserModel } from '../Model';

class LoginModel {
  constructor(userId, userPw) {
    this.UserModel = new UserModel('', userId, userPw, '', '');
  }

  login() {
    return this.UserModel.postLogin();
  }

  logout() {
    return this.UserModel.postLogout();
  }
}
export default LoginModel;