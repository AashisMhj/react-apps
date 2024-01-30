export function redirect(){
    let stateObj = {id: 100};
    window.history.replaceState(stateObj, "Dashboard", "/");
}