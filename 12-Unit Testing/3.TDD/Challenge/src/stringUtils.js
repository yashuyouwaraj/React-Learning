export const reverseString=(str)=>{
    if(str===""){
        return ""
    } else{
        return str.split("").reverse().join("")
    }
}