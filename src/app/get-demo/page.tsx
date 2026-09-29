import BookDemoPage from "./clientDemo";


import { generateSEOMetadata } from '../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;


export default function Page(){
    return <BookDemoPage/>
}