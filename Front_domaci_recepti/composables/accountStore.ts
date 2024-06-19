import Cookies from 'universal-cookie';

// Interface za korisnika
interface User {
  username: string;
  role: string;
}

// Kreiranje instance Cookies
const cookies = new Cookies();

// Stanje i metode za upravljanje stanjem korisničkog računa
const accountStore = {
  state: {
    user: null as User | null,
    receptId: null as number | null,
    korinsikId: null as number | null,
  },
  getters: {
    isLoggedIn(): boolean {
      return !!cookies.get('authToken');
    },
  },
  actions: {
    login(user: User) {
      accountStore.state.user = user;
      if (accountStore.getters.isLoggedIn()) {
        window.location.href = '/profil';
      }
      else {
        window.location.href = '/login';
      }
    },
    logout() {
      cookies.remove('authToken');
      accountStore.state.user = null;
    },
    setReceptId(id: number) {
      accountStore.state.receptId = id;
      sessionStorage.setItem('receptId', id.toString());
    },
    setKorinsikId(id: number) {
      accountStore.state.korinsikId = id;
      sessionStorage.setItem('korinsikId', id.toString());
    },
  },
};

export default accountStore;