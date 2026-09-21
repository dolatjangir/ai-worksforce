import { Suspense } from "react";
import ApplyNow from "./clientapply";


export default function Page(){
   return (
      <Suspense fallback={<div>Loading...</div>}>
       <ApplyNow/>
       </Suspense>
   )
}