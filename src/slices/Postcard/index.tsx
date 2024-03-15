import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PostCard } from "@/components/Postcard";
import { createClient } from "@/prismicio";
import Bounded from "@/components/Bounded";
/**
 * Props for `Postcard`.
 */

export type PostcardProps = SliceComponentProps<Content.PostcardSlice>;
const client = createClient();
const posts = await client.getAllByType("blog_post", {
  orderings: [
    { field: "my.blog_post.publication_date", direction: "desc" },
    { field: "document.first_publication_date", direction: "desc" },
  ],
});
/**
 * Component for "Postcard" Slices.
 */
const Postcard = ({ slice }: PostcardProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}>
    
       <section className="grid grid-cols-1 gap-8 max-w-3xl w-full">
       
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
      </Bounded>
    
  );
};

export default Postcard;
