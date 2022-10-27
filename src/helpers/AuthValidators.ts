//6-16 length, upper & lowercase, letters & numbers only
export function ValidateUsername(username: string) {
  return String(username).match(/^[a-zA-Z0-9]{6,16}$/);
}

//simple email validation string@string.string
export function ValidateEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

//6 - 16 length, at least one number and one special character
export function ValidatePassword(password: string) {
  return String(password).match(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  );
}

export function ValidateIdentifier(identifier: string) {
  if (identifier.includes("@")) {
    return String(identifier)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  } else {
    return String(identifier).match(/^[a-zA-Z0-9]{6,16}$/);
  }
}
