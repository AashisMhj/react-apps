export function getId(url:string):number{
    const urlObj = new URL(url);
    return parseInt(urlObj.pathname.trim().split("/")[4]);
}

export function numberToHashNumber(num:number|undefined):string{
    if(!num){
        return "#000"
    }
    let numString = num.toString().padStart(5,"0");
    return "#"+numString;
}
