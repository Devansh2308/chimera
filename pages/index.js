
import Head from 'next/head';

import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Why from "../components/Why";
import Faq from "../components/Faq";
import Contact from "../components/COntact";





const index = () =>{
    return(
        <div>
            <Head>
                <title>Chemira-X</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
                {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet"></link> */}
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
                {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
                <link href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap" rel="stylesheet"></link> 
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            </Head>
           
            
            
            
            <Nav/>
            <Carousel/>
            <About/>
            <Why/>
            <Faq/>
            <Contact/>
            
        </div>
       
 
    )
}
  
  export default index;