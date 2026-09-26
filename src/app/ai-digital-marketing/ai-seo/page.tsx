import AISEOPage from "./clientAiSeo";

import { generateSEOMetadata } from '../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;

export default function Page(){
    return <AISEOPage/>
}