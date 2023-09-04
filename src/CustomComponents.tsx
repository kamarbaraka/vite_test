
import * as React from "react";

class CustomComponents extends React.Component<React.PropsWithChildren>{

    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default CustomComponents;