export const profile = (e) => {
    e.preventDefault();
    AUTH.signOut();
    window.location.hash = '#profile';
    localStorage.removeItem('user');
  };

  export const logout = (e) => {
    e.preventDefault();
    AUTH.signOut();
    window.location.hash = '#login';
    localStorage.removeItem('user');
  };