import FAQPage from "./clientfaq";



import { generateSEOMetadata } from '../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;



export default function Page(){
    return <FAQPage/>
}