import AIBusinessAssessmentPage from "./clientBusiness";


import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('ai-business-assessment');
  return(
    <>
 <AIBusinessAssessmentPage/>

    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}