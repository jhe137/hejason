import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import * as React from "react";


const components: JSXMapSerializer={
  heading2: ({children})=>(
    <Heading
      as ="h2"
      size = "md"
      className="text-center mb-12"
    >{children}</Heading>
  ),
  heading3: ({children})=>(
    <Heading
      as ="h3"
      size = "sm"
      className="text-center mb-3 font-medium sm:text-left"
    >{children}</Heading>
  ),
  paragraph: ({children})=>(
   <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">{children}</p>
  )
};

const icons={
  // atom: <IconReact  width='80px' height='80px'/>,
  // megaphone: <IconMegaphone  width='80px' height='80px'/>,
  // clover: <IconClover  width='80px' height='80px'/>,
}
/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <PrismicRichText field={slice.primary.heading} components={components}/>
     <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auo sm:place-items-start place-items-center">
      {slice.items.map((item,index)=>(
        <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
          {/* {item.icon &&<div className="mb-5">
          <>{icons[item.icon]}</></div>} */}
          <PrismicRichText components={components} field={item.title} />
          <PrismicRichText components={components} field={item.description} />
          

        </div>

      ))}
     </div>
    </Bounded>
  );
};

export default Features;


// function IconAtom(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       height="1em"
//       width="1em"
//       {...props}
//     >
//       <path d="M12 11a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1M4.22 4.22C5.65 2.79 8.75 3.43 12 5.56c3.25-2.13 6.35-2.77 7.78-1.34 1.43 1.43.79 4.53-1.34 7.78 2.13 3.25 2.77 6.35 1.34 7.78-1.43 1.43-4.53.79-7.78-1.34-3.25 2.13-6.35 2.77-7.78 1.34-1.43-1.43-.79-4.53 1.34-7.78-2.13-3.25-2.77-6.35-1.34-7.78m11.32 4.24c.61.62 1.17 1.25 1.69 1.88 1.38-2.13 1.88-3.96 1.13-4.7-.74-.75-2.57-.25-4.7 1.13.63.52 1.26 1.08 1.88 1.69m-7.08 7.08c-.61-.62-1.17-1.25-1.69-1.88-1.38 2.13-1.88 3.96-1.13 4.7.74.75 2.57.25 4.7-1.13-.63-.52-1.26-1.08-1.88-1.69m-2.82-9.9c-.75.74-.25 2.57 1.13 4.7.52-.63 1.08-1.26 1.69-1.88.62-.61 1.25-1.17 1.88-1.69-2.13-1.38-3.96-1.88-4.7-1.13m4.24 8.48c.7.7 1.42 1.34 2.12 1.91.7-.57 1.42-1.21 2.12-1.91.7-.7 1.34-1.42 1.91-2.12-.57-.7-1.21-1.42-1.91-2.12-.7-.7-1.42-1.34-2.12-1.91-.7.57-1.42 1.21-2.12 1.91-.7.7-1.34 1.42-1.91 2.12.57.7 1.21 1.42 1.91 2.12m8.48 4.24c.75-.74.25-2.57-1.13-4.7-.52.63-1.08 1.26-1.69 1.88-.62.61-1.25 1.17-1.88 1.69 2.13 1.38 3.96 1.88 4.7 1.13z" />
//     </svg>
//   );
// }

// function IconMegaphone(props) {
//   return (
//     <svg
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       viewBox="0 0 24 24"
//       height="1em"
//       width="1em"
//       {...props}
//     >
//       <path d="M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 11-5.8-1.6" />
//     </svg>
//   );
// }

// function IconClover(props) {
//   return (
//     <svg
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       viewBox="0 0 24 24"
//       height="1em"
//       width="1em"
//       {...props}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" />
//       <path d="M12 10L8.603 6.56a2.104 2.104 0 010-2.95 2.04 2.04 0 012.912 0L12 4l.485-.39a2.04 2.04 0 012.912 0 2.104 2.104 0 010 2.95L12 10zM12 14l-3.397 3.44a2.104 2.104 0 000 2.95 2.04 2.04 0 002.912 0L12 20l.485.39a2.04 2.04 0 002.912 0 2.104 2.104 0 000-2.95L12 14zM14 12l3.44-3.397a2.104 2.104 0 012.95 0 2.04 2.04 0 010 2.912L20 12l.39.485a2.04 2.04 0 010 2.912 2.104 2.104 0 01-2.95 0L14 12zM10 12L6.56 8.603a2.104 2.104 0 00-2.95 0 2.04 2.04 0 000 2.912L4 12l-.39.485a2.04 2.04 0 000 2.912 2.104 2.104 0 002.95 0L10 12z" />
//     </svg>
//   );
// }

// function IconReact(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       height="1em"
//       width="1em"
//       {...props}
//     >
//       <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
//     </svg>
//   );
// }
