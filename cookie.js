function acceptCookies()
// ir tā funkcija kura ir sasaistīta ar pogu//
{
setCookie('cookiesAccepted','true', 30);
document.getElementById('cookie-banner').style.display = 'none';
} 
//tas ir pārlūk programa//
window.onload = function (){
if (!getCookie('cookiesAccepted')) {document.getElementById('cookie-banner').style.display = 'block';}
}
//taisam cepumu//
function setCookie (name, value, days) 
{
// 864e5 = 86400000 ms = 1 day
const expires = new Date(Date.now() + days * 864e5).toUTCString();
 
}//parbaudam vai ir cepums//
function getCookie (name)
{
const match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  // If there's a match, return the value; otherwise return null
  return match ? match[1] : null;
}