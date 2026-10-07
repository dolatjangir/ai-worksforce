import TermsAndConditionsPage from "./clientTerms";

import { generateSEOMetadata } from '../../../lib/seometadata';
import RelatedBlogs from '@/components/related-blogs';
import { getPageBlogs } from '../../../lib/blogs';



export const generateMetadata = generateSEOMetadata;
// export const dynamic = 'force-dynamic';

export default async function  page() {
   const blogs = await getPageBlogs('terms-and-conditions');
  return(
    <>
    <TermsAndConditionsPage/>
     <RelatedBlogs blogs={blogs} />
     </>
    )
}