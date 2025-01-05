import React from 'react';
import Layout from '../../Components/Layouts/Layout';
import Section1 from './Section1';
import '../../styles/HomeStyle.css';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

function Home() {
    return (
        <Layout>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Layout>
    )
}

export default Home
