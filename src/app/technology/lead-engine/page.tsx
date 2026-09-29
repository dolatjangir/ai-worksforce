import LeadEnginePage from "./clientLead";


import { generateSEOMetadata } from '../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;



export default function Page(){
    return <LeadEnginePage/>
}