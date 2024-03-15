import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
const components: JSXMapSerializer = {
  heading1:({children}) => (<Heading as ="h1" size ="lg" className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">{children}</Heading>),
  
  paragraph: ({ children }) => <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-5xl">{children}</p>
  
  }


/**
 * Props for `RichText`.
 */
export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} 
    components= {components}
    />
    <PrismicRichText field={slice.primary.body} 
    components= {components}
    />
    </Bounded>
  );
};

export default RichText;
