export function bodyLock() {
   document.body.classList.toggle("lock");
}

export function isMobile() {
   const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
   return regex.test(navigator.userAgent);
}
