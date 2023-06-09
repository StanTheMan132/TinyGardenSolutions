// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qYXJkyifyxfQuqtTDFQCRa
// Component: 8QY6yVqFD3
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: klxX5nKFAD/component
import PageBanner2 from "../../PageBanner2"; // plasmic-import: 4PqtYFOawF/component
import BlogText from "../../BlogText"; // plasmic-import: 5irGb5N5YY/component
import Footer from "../../Footer"; // plasmic-import: cdtIcE32qk/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_tiny_garden_solutions.module.css"; // plasmic-import: qYXJkyifyxfQuqtTDFQCRa/projectcss
import sty from "./PlasmicBlogPagina.module.css"; // plasmic-import: 8QY6yVqFD3/css

export const PlasmicBlogPagina__VariantProps = new Array();

export const PlasmicBlogPagina__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicBlogPagina__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <PageBanner2
            data-plasmic-name={"pageBanner2"}
            data-plasmic-override={overrides.pageBanner2}
            className={classNames("__wab_instance", sty.pageBanner2)}
          />

          <BlogText
            data-plasmic-name={"blogText"}
            data-plasmic-override={overrides.blogText}
            className={classNames("__wab_instance", sty.blogText)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navbar", "pageBanner2", "blogText", "footer"],
  navbar: ["navbar"],
  pageBanner2: ["pageBanner2"],
  blogText: ["blogText"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBlogPagina__ArgProps,
          internalVariantPropNames: PlasmicBlogPagina__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlogPagina__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogPagina";
  } else {
    func.displayName = `PlasmicBlogPagina.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogPagina = Object.assign(
  // Top-level PlasmicBlogPagina renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    pageBanner2: makeNodeComponent("pageBanner2"),
    blogText: makeNodeComponent("blogText"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicBlogPagina
    internalVariantProps: PlasmicBlogPagina__VariantProps,
    internalArgProps: PlasmicBlogPagina__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBlogPagina;
/* prettier-ignore-end */
