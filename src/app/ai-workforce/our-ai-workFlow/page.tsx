import AiWorkflowPage from "./clientOurWorkflow";


import { generateSEOMetadata } from '../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;
export default function Page(){
    return <AiWorkflowPage/>
}