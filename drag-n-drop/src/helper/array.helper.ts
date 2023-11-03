export function moveElementInArray(arr:Array<unknown>, elementIndex:number, targetIndex:number){
    const element = arr.splice(elementIndex, 1)[0]; // Remove the element at element Index;
    arr.splice(targetIndex, 0, element);

    return arr;
}