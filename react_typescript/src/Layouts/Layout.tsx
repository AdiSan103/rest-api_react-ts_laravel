import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import '../Assets/css/font.css';
import { BrowserRouter as Router} from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = (props:Props) => 
{
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <main className='min-h-[40vw]'>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default Layout;
