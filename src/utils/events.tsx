export function subscribe(eventName:string, listener:any) {
  window.addEventListener(eventName, listener);
}
