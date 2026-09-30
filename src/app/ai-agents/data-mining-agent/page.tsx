import React from 'react'
import DataMiningAgentLanding from './clientData'
import RelatedBlogs from '@/components/related-blogs';
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('data-mining-agent');
  return(
    <>
<DataMiningAgentLanding/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}