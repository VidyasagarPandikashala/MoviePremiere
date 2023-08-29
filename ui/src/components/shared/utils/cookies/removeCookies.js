export default function removeCookie(name) {
  const cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = cookieString;
}
