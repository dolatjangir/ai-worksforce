import Home from "@/components/home";
import { generateSEOMetadata } from "../../lib/seometadata";
import { getPageBlogs } from "../../lib/blogs";
import RelatedBlogs from "@/components/related-blogs";


export const generateMetadata = generateSEOMetadata;




export default async function Page(){
  const blogs = await getPageBlogs('home');
  return(
    <>
    <Home/>
    
        <RelatedBlogs blogs={blogs} />
        </>
  )
}