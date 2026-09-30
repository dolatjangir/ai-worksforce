import AISocialMediaAgentLanding from './clientSocial'
import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('social-media-agent');
  return(
    <>
<AISocialMediaAgentLanding/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}