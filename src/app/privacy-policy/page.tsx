

import PrivacyPolicyPage from "./clientPrivacy";

import { generateSEOMetadata } from '../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../lib/blogs';



export const generateMetadata = generateSEOMetadata;


export default async function  page() {
   const blogs = await getPageBlogs('privacy-policy');
  return(
    <>
    <PrivacyPolicyPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}