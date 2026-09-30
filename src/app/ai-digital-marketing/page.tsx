import AIDigitalMarketingPage from "./clientdigitalmarketing";


import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../lib/seometadata';
import { getPageBlogs } from '../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('ai-digital-marketing');
  return(
    <>
<AIDigitalMarketingPage/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}