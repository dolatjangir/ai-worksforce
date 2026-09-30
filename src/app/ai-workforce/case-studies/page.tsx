import CaseStudiesPage from "./clientCaseStudies";

import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('case-studies');
  return(
    <>
<CaseStudiesPage/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}