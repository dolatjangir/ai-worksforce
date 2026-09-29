import Home from "@/components/home";
import { generateSEOMetadata } from "../../lib/seometadata";


export const generateMetadata = generateSEOMetadata;




export default function Page(){
  return(
    <Home/>
  )
}