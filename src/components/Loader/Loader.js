import React from "react";
import { BallTriangle } from  'react-loader-spinner';


class Loader extends React.Component {
    render() {
        return (
            <div>
            <BallTriangle 
                color="#00BFFF" 
                height={80} 
                width={80} />
        </div>
        );
    }
}
export default Loader;