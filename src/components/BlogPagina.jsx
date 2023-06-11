// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicBlogPagina } from "./plasmic/tiny_garden_solutions/PlasmicBlogPagina";

function BlogPagina_(props, ref) {
  // Use PlasmicBlogPagina to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicBlogPagina are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all BlogPaginaProps here, but feel free
  // to do whatever works for you.
  return <PlasmicBlogPagina root={{ ref }} {...props} />;
}

const BlogPagina = React.forwardRef(BlogPagina_);

export default BlogPagina;
