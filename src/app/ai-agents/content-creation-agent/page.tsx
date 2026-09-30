import React from 'react'
import ContentCreationAgentLanding from './clientContent'
import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('content-creation-agent');
  return(
    <>
<ContentCreationAgentLanding/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}
