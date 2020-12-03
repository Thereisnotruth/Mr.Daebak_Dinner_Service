import { UserModel } from '../Model';

class UserInfoModel {
  constructor(name, userId, userPw, address, identity) {
    this.UserModel = new UserModel(name, userId, userPw, address, identity);
  }
  
  setName(name) {
    this.UserModel.setName(name);
  }
  setUserId(userId) {
    this.UserModel.setUserId(userId);
  }
  setUserPw(userPw) {
    this.UserModel.setUserPw(userPw);
  }
  setAddress(address) {
    this.UserModel.setAddress(address);
  }
  getUserInfo() {
    return this.UserModel.getUserInfo();
  }
  
  modify() {
    return this.UserModel.postUserInfo();
  }
}

export default UserInfoModel;