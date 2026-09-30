

import CampaignAutomationAgentLanding from './clientCampaign'
import { generateSEOMetadata } from '../../../../lib/seometadata';
import { getPageBlogs } from '../../../../lib/blogs';
import RelatedBlogs from '@/components/related-blogs';
export const generateMetadata = generateSEOMetadata;



export default async function  Page() {
   const blogs = await getPageBlogs('campaign-automation');
  return(
    <>
<CampaignAutomationAgentLanding/>
    <RelatedBlogs blogs={blogs} />
    </>
  ) 
}