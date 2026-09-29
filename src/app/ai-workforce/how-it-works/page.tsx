import { generateSEOMetadata } from "../../../../lib/seometadata";
import HowItWorksPage from "./clienthow";


export const generateMetadata = generateSEOMetadata;

export default function Page(){
    return <HowItWorksPage/>
}