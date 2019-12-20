export default function trimTo(array, limit){

    let newArray = array;

    if(typeof(newArray) === "object"){
        
        newArray.length = limit;
        return newArray;
    }
    else if(typeof(newArray) === "string"){

        const newString = newArray.split("");

        newString.length = limit;
        
        newArray = newString.join("");

        return newArray;

    }

    return null;

}