import React, {useRef} from "react";

function FieldLabel(){
 const ref= useRef(); 
 return <h1 ref={ref}>FieldLabel</h1>;
}

const Button = () => {
    return <h1>Button</h1>;
}


export { FieldLabel, Button };
