export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePseudo = (pseudo: string) => {
  return pseudo.length >= 3;
};

export const validatePassword = (password: string) => {
  return password.length >= 8;
};
