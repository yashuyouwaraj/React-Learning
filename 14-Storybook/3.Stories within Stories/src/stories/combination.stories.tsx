import { Primary } from "./Button.stories";
import { LargeInput } from "./MyInput.stories";

export default{
    title:"Combo/Input and button"
}

export const Combo=()=>{
    return (
        <>
        <LargeInput placeholder="Enter whatever" />
        <Primary />
        </>
    )
}