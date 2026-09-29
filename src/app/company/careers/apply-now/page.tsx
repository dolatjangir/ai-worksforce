import { Suspense } from "react";
import ApplyNow from "./clientapply";


import { generateSEOMetadata } from '../../../../../lib/seometadata';

export const generateMetadata = generateSEOMetadata;



export default function Page(){
   return (
      <Suspense fallback={<div>Loading...</div>}>
       <ApplyNow/>
       </Suspense>
   )
}