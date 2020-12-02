import axios from 'axios';

class UserModel {
  constructor(name, userId, userPw, address, identity) {
    this.name = name;
    this.userId = userId;
    this.userPw = userPw;
    this.address = address;
    this.identity = identity;
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
    const check = axios.post('/v1/logout')

    return check;
  }
}

export default UserModel;