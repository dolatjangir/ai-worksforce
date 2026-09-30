import OurBlogPage from "./clientBlog";

import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';

export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('blog');
  return(
    <>
 <OurBlogPage/>

    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}