import Cookies from "universal-cookie";
const cookies = new Cookies();
const accountStore = {
  state: {
    user: null,
    receptId: null,
    korinsikId: null
  },
  getters: {
    isLoggedIn() {
      return !!cookies.get("authToken");
    }
  },
  actions: {
    login(user) {
      accountStore.state.user = user;
      if (accountStore.getters.isLoggedIn()) {
        window.location.href = "/profil";
      } else {
        window.location.href = "/login";
      }
    },
    logout() {
      cookies.remove("authToken");
      accountStore.state.user = null;
    },
    setReceptId(id) {
      accountStore.state.receptId = id;
      sessionStorage.setItem("receptId", id.toString());
    },
    setKorinsikId(id) {
      accountStore.state.korinsikId = id;
      sessionStorage.setItem("korinsikId", id.toString());
    }
  }
};
export {
  accountStore as a
};
//# sourceMappingURL=accountStore-369f4819.js.map
