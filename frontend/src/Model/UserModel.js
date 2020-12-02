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
    const res = axios.post('/v1/register', {
      name: this.name,
      userId: this.userId,
      userPw: this.userPw,
      address: this.address,
      identity: this.identity,
    });
    return res;
  }
}

export default UserModel;