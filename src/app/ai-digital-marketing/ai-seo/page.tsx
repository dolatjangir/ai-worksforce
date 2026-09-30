import AISEOPage from "./clientAiSeo";


import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('ai-seo');
  return(
    <>
<AISEOPage/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}