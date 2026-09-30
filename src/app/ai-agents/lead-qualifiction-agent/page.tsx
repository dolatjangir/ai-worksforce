import React from 'react'
import LeadBotPage from './clientLeadQualifiction'
import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('lead-qualifiction-agent');
  return(
    <>
<LeadBotPage/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}