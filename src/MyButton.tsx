
import * as React from "react";

class MyButton extends React.Component<React.PropsWithChildren>{

    render(){

        const enabled = [true, false];

        return(

            <button disabled={enabled[(Math.floor(Math.random() * 2) + 1)]} >
                {this.props.children}
            </button>
        )
    }

}

export {MyButton};