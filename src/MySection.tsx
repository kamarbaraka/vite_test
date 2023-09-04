import * as React from "react";
import {PropsWithChildren} from "react";

class MySection extends React.Component<PropsWithChildren>{

    render(){

        return(
            <section>
                <p>THIS IS MY SECTION</p>
                {this.props.children}
            </section>
        )
    }

}

export {MySection};