const mockAuth = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    mockAuth.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback: VoidFunction) {
    mockAuth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default mockAuth;
