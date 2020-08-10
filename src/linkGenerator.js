import React from 'react';

const linkGenerator = () => {

    const base_url = 'localhost:3000/pagecli/'

    let values = {
        nome:"Acran",
        idade: "28",
        profissao: "DEV"
    }
    
    const hash = btoa(JSON.stringify(values))
    
    
   return(
        <div>
            {base_url + hash}
        </div>
   ) 
}


export default linkGenerator;