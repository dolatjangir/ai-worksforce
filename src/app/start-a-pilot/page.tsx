import PilotPage from "./clientPilot";


import { generateSEOMetadata } from '../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;


export default function Page(){
  return(
    <PilotPage/>
  )
}