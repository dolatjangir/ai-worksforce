import React from 'react'
import FollowUpAgentLanding from './clientFollowUp'
import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('follow-up-agent');
  return(
    <>
<FollowUpAgentLanding/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}