import React, {Component} from 'react';
import Page1 from '../Page1';


class Home extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div id="pages">
                <Page1/>
            </div>
        )
    }
}
       
    

export default Home;