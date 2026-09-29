import SolutionsPage from "./clientSolutions";



import { generateSEOMetadata } from '../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;



export default function Page(){
  return(
    <SolutionsPage/>
  )
}