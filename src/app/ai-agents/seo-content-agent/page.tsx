import AISEOContentAgentLanding from "./clientSeo";
import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('seo-content-agent');
  return(
    <>
<AISEOContentAgentLanding/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}