import { Suspense } from "react";
import ApplyNow from "./clientapply";


import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../../lib/seometadata';
import { getPageBlogs } from '../../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('apply-now');
  return(
    <>
 <Suspense fallback={<div>Loading...</div>}>
       <ApplyNow/>
       </Suspense>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}