import ResourcesPage from "./clientWorkforce";

import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('ai-workforce-guides');
  return(
    <>
 <ResourcesPage/>

    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}