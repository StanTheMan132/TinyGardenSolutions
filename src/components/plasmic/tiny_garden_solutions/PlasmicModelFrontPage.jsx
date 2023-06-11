// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qYXJkyifyxfQuqtTDFQCRa
// Component: qm-EzOzJON
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button2 from "../../Button2"; // plasmic-import: VS4Cm-DCBjr/component
import { useScreenVariants as useScreenVariantstvKzUvB7Ggzh0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tvKzUvB7GGZH0/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_tiny_garden_solutions.module.css"; // plasmic-import: qYXJkyifyxfQuqtTDFQCRa/projectcss
import sty from "./PlasmicModelFrontPage.module.css"; // plasmic-import: qm-EzOzJON/css
import tinyGardenMiniPnGpngPP2EHakp3 from "./images/tinyGardenMiniPnGpng.png"; // plasmic-import: pP2eHAKP3/picture

export const PlasmicModelFrontPage__VariantProps = new Array();

export const PlasmicModelFrontPage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicModelFrontPage__RenderFunc(props) {
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
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div
          data-plasmic-name={"foto"}
          data-plasmic-override={overrides.foto}
          className={classNames(projectcss.all, sty.foto)}
        >
          <div
            data-plasmic-name={"background"}
            data-plasmic-override={overrides.background}
            className={classNames(projectcss.all, sty.background)}
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__prxv8
              )}
            >
              {"Tiny Garden Mini"}
            </h1>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__jpObx)}>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: tinyGardenMiniPnGpngPP2EHakp3,
                fullWidth: 4000,
                fullHeight: 4000,
                aspectRatio: undefined
              }}
            />
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.column__jyEXg)}>
          <div className={classNames(projectcss.all, sty.freeBox__dLk4I)}>
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                sty.h1__ryw1L
              )}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fmYWo
                  )}
                >
                  {"Tiny Garden Mini"}
                </div>
              ) : null}
            </h1>
            <div className={classNames(projectcss.all, sty.freeBox___9ZVp)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7B6K2
                )}
              >
                {
                  "The Tiny Garden Mini is perfect for the casual cannabis user that wants to grow their own cannabis. \nStealth\nYields 20-30grams\nFits everywhere"
                }
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"buttons"}
            data-plasmic-override={overrides.buttons}
            className={classNames(projectcss.all, sty.buttons)}
          >
            <Button2
              className={classNames("__wab_instance", sty.button2__y3ItA)}
            >
              {"Register for pre order"}
            </Button2>
            <Button2
              className={classNames("__wab_instance", sty.button2__ht5P)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0F3Xv
                )}
              >
                {"Learn more"}
              </div>
            </Button2>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "foto", "background", "img", "buttons"],
  columns: ["columns", "foto", "background", "img", "buttons"],
  foto: ["foto", "background", "img"],
  background: ["background"],
  img: ["img"],
  buttons: ["buttons"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicModelFrontPage__ArgProps,
          internalVariantPropNames: PlasmicModelFrontPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicModelFrontPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModelFrontPage";
  } else {
    func.displayName = `PlasmicModelFrontPage.${nodeName}`;
  }
  return func;
}

export const PlasmicModelFrontPage = Object.assign(
  // Top-level PlasmicModelFrontPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    foto: makeNodeComponent("foto"),
    background: makeNodeComponent("background"),
    img: makeNodeComponent("img"),
    buttons: makeNodeComponent("buttons"),
    // Metadata about props expected for PlasmicModelFrontPage
    internalVariantProps: PlasmicModelFrontPage__VariantProps,
    internalArgProps: PlasmicModelFrontPage__ArgProps
  }
);

export default PlasmicModelFrontPage;
/* prettier-ignore-end */