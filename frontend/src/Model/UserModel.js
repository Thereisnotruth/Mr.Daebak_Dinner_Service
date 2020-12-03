import axios from 'axios';

class UserModel {
  constructor(name, userId, userPw, address, identity) {
    this.name = name;
    this.userId = userId;
    this.userPw = userPw;
    this.address = address;
    this.identity = identity;
  }
  setName(name) {
    this.name = name;
  }
  setUserId(userId) {
    this.userId = userId;
  }
  setUserPw(userPw) {
    this.userPw = userPw;
  }
  setAddress(address) {
    this.address = address;
  }
  postRegister() {
    const check = axios.post('/v1/register', {
      name: this.name,
      userId: this.userId,
      userPw: this.userPw,
      address: this.address,
      identity: this.identity,
    }).catch((e) => {
      console.log(e);
      return (e.response);
    });
    return check;
  }
  postLogin() {
    const check = axios.post('/v1/login', {
      userId: this.userId,
      userPw: this.userPw,
    }).catch((e) => {
      console.log(e);
      return (e.response);
    });
    return check;
  }
  postLogout() {
    const check = axios.post('/v1/logout');

    return check;
  }
  postUserInfo() {
    const check = axios.post('/v1/userInfo', {
      userPw: this.userPw,
      address: this.address,
    });
    return check;
  }
  getUserInfo() {
    const check = axios.get('/v1/userInfo');
    return check; 
  }
}

export default UserModel;