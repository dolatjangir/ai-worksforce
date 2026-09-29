import AboutPage from "./clientAbout";


import { generateSEOMetadata } from '../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;


export default function Page(){
    return <AboutPage/>
}