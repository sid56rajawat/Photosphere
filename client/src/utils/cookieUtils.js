// Function to update a specific cookie's value
export function updateCookieValue(cookieName, newValue) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookieParts = cookies[i].split("=");
    if (cookieParts[0] === cookieName) {
      cookieParts[1] = newValue;
      return `${cookieParts[0]}=${cookieParts[1]}; path=/`;
    }
  }
  return `${cookieName}=${newValue}; path=/`;
}
