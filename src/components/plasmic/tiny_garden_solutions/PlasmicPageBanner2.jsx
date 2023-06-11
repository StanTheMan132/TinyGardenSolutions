// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qYXJkyifyxfQuqtTDFQCRa
// Component: 4PqtYFOawF
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantstvKzUvB7Ggzh0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tvKzUvB7GGZH0/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_tiny_garden_solutions.module.css"; // plasmic-import: qYXJkyifyxfQuqtTDFQCRa/projectcss
import sty from "./PlasmicPageBanner2.module.css"; // plasmic-import: 4PqtYFOawF/css
import image176VQsQmMthOh from "./images/image17.jpg"; // plasmic-import: 6VQsQmMthOH/picture

export const PlasmicPageBanner2__VariantProps = new Array();

export const PlasmicPageBanner2__ArgProps = new Array(
  "children",
  "slot",
  "slot2"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPageBanner2__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstvKzUvB7Ggzh0()
  });
  return (
    <div
      data-plasmic-name={"pageBanner"}
      data-plasmic-override={overrides.pageBanner}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.pageBanner
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__hx9N9)}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          hasGap={true}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__in2Vf)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___01IdV)}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(projectcss.all, projectcss.h1, sty.h1)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "Titel",
                  value: args.slot,
                  className: classNames(sty.slotTargetSlot)
                })}
              </h1>
              <div className={classNames(projectcss.all, sty.freeBox__aQzIq)}>
                {p.renderPlasmicSlot({
                  defaultContents:
                    "Hier dan een kleine beschrijving van de pagina inhoud\n3\nzinnen max denk ik",
                  value: args.slot2,
                  className: classNames(sty.slotTargetSlot2)
                })}
              </div>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.column__n9Ws)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__qdOS)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: image176VQsQmMthOh,
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.children
            })}
          </div>
        </p.Stack>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  pageBanner: ["pageBanner", "columns", "h1"],
  columns: ["columns", "h1"],
  h1: ["h1"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPageBanner2__ArgProps,
          internalVariantPropNames: PlasmicPageBanner2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageBanner2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "pageBanner") {
    func.displayName = "PlasmicPageBanner2";
  } else {
    func.displayName = `PlasmicPageBanner2.${nodeName}`;
  }
  return func;
}

export const PlasmicPageBanner2 = Object.assign(
  // Top-level PlasmicPageBanner2 renders the root element
  makeNodeComponent("pageBanner"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    // Metadata about props expected for PlasmicPageBanner2
    internalVariantProps: PlasmicPageBanner2__VariantProps,
    internalArgProps: PlasmicPageBanner2__ArgProps
  }
);

export default PlasmicPageBanner2;
/* prettier-ignore-end */