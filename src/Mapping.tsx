import * as React from "react";

class Mapping extends React.Component<React.PropsWithChildren>{

    render(){

        const array = ["kamar", "baraka", "kahindi"];
        const object:{[key: string]: string} = {
            first_name: "kamar",
            mid_name: "baraka",
            last_name: "kahindi"
        }

        return(

            <section>
                <h1>Array</h1>
                <ul>
                    {array.map((each) => (
                        <li key={each}>{each}</li>
                    ))}
                </ul>

                <h1>Object</h1>
                <ul>
                    {Object.keys(object).map((each) => (
                        <li key={each}>{each} : {object[each]}</li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default Mapping;