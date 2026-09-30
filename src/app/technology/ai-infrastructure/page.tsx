import AIInfrastructurePage from "./clientInfra";

import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('ai-infrastructure');
  return(
    <>
 <AIInfrastructurePage/>

    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}