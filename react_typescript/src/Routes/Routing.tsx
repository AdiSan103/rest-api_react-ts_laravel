import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Layout from '../Layouts/Layout';


const Routing = () => {
    return(
    <Layout>
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </Layout>
  );
}

export default Routing;
