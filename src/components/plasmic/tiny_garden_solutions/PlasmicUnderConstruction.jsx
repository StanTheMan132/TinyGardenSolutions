// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qYXJkyifyxfQuqtTDFQCRa
// Component: sdFwgj_RBK
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import {
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
import sty from "./PlasmicUnderConstruction.module.css"; // plasmic-import: sdFwgj_RBK/css
import asset3Svg77Wta1Zpmy from "./images/asset3Svg.svg"; // plasmic-import: 77Wta1Zpmy/picture

export const PlasmicUnderConstruction__VariantProps = new Array();

export const PlasmicUnderConstruction__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicUnderConstruction__RenderFunc(props) {
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
  const new$Queries = {
    componentData2: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "eYPmaoow9fiTCYRn3oR1Fw",
            opId: "f18aa320-0a76-4ace-aba4-c588a3664855",
            userArgs: {},
            cacheKey: "plasmic.$.1W2sSl8NW.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstvKzUvB7Ggzh0()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"underConstrution2"}
          data-plasmic-override={overrides.underConstrution2}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.underConstrution2
          )}
        >
          <div
            data-plasmic-name={"page"}
            data-plasmic-override={overrides.page}
            className={classNames(projectcss.all, sty.page)}
          >
            <div
              data-plasmic-name={"logo2"}
              data-plasmic-override={overrides.logo2}
              className={classNames(projectcss.all, sty.logo2)}
            >
              {true ? (
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto"}
                  displayMaxHeight={"200px"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: asset3Svg77Wta1Zpmy,
                    fullWidth: 275,
                    fullHeight: 150,
                    aspectRatio: 1.833465
                  }}
                />
              ) : null}
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"underConstruction"}
              data-plasmic-override={overrides.underConstruction}
              hasGap={true}
              className={classNames(projectcss.all, sty.underConstruction)}
            >
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__scrb
                )}
              >
                {"Under construction"}
              </h1>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c5TTd
                )}
              >
                {"Our website is currently under construction. "}
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"launchingIn"}
              data-plasmic-override={overrides.launchingIn}
              hasGap={true}
              className={classNames(projectcss.all, sty.launchingIn)}
            >
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__bscI4
                )}
              >
                {"Launching in:"}
              </h1>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zD7Ta
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (
                        176 -
                        $queries.componentData2.data.response.day_of_year +
                        " Days"
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "14";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"ourStory"}
              data-plasmic-override={overrides.ourStory}
              hasGap={true}
              className={classNames(projectcss.all, sty.ourStory)}
            >
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__wFkE
                )}
              >
                {"Our story"}
              </h1>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hmqT
                )}
              >
                {
                  "At Tiny Garden Solutions, we are on a mission to revolutionize the cannabis market by empowering casual users to cultivate their own cannabis at home. Through our high-tech, small-scale growing solutions, we aim to make the process almost fully autonomous, enabling even the most inexperienced growers to produce top-quality cannabis with ease. Join us as we redefine the way cannabis is grown and enjoyed."
                }
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"connect"}
              data-plasmic-override={overrides.connect}
              hasGap={true}
              className={classNames(projectcss.all, sty.connect)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__tncw5)}
              >
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__jIaFp
                  )}
                >
                  {"Want to join? "}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2Xdgn
                  )}
                >
                  {
                    "If you are interested in being part of our early adopter plan or exploring potential collaboration opportunities, please reach out to us via email at info@tinygardensolutions.com. We look forward to hearing from you and discussing how we can work together!"
                  }
                </div>
                <Button2
                  className={classNames("__wab_instance", sty.button2__sjjFo)}
                  onClick={async event => {
                    const $steps = {};
                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "customFunction",
                                interactionUuid: "iXPzJVJbA",
                                componentUuid: "sdFwgj_RBK",
                                argName: "customFunction"
                              },
                              () => () => {
                                return (window.location.href =
                                  "mailto:info@tinygardensolutions.com");
                              }
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "customFunction",
                              interactionUuid: "iXPzJVJbA",
                              componentUuid: "sdFwgj_RBK"
                            },
                            () =>
                              (({ customFunction }) => {
                                return customFunction();
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "customFunction",
                          interactionUuid: "iXPzJVJbA",
                          componentUuid: "sdFwgj_RBK"
                        },
                        $steps["runCode"]
                      );
                    }
                  }}
                  shape={"rounded"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ia0Nm
                    )}
                  >
                    {"info@tinygardensolutions.com"}
                  </div>
                </Button2>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__emmtG)}
              >
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__blRnd
                  )}
                >
                  {"Follow us"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vDiAe
                  )}
                >
                  {
                    "Join our community on Instagram and stay updated with our latest progress. Be the first to know about exciting developments and become a part of our growing community today!\n\n"
                  }
                </div>
                <Button2
                  className={classNames("__wab_instance", sty.button2___45HXs)}
                  onClick={async event => {
                    const $steps = {};
                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "customFunction",
                                interactionUuid: "Bdx1_0p4Z",
                                componentUuid: "sdFwgj_RBK",
                                argName: "customFunction"
                              },
                              () => () => {
                                return window.open(
                                  "https://www.instagram.com/tinygardensolutions"
                                );
                              }
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "customFunction",
                              interactionUuid: "Bdx1_0p4Z",
                              componentUuid: "sdFwgj_RBK"
                            },
                            () =>
                              (({ customFunction }) => {
                                return customFunction();
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "customFunction",
                          interactionUuid: "Bdx1_0p4Z",
                          componentUuid: "sdFwgj_RBK"
                        },
                        $steps["runCode"]
                      );
                    }
                  }}
                  shape={"rounded"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ygNaP
                    )}
                  >
                    {"Instagram"}
                  </div>
                </Button2>
              </p.Stack>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  underConstrution2: [
    "underConstrution2",
    "page",
    "logo2",
    "img",
    "underConstruction",
    "launchingIn",
    "ourStory",
    "connect"
  ],

  page: [
    "page",
    "logo2",
    "img",
    "underConstruction",
    "launchingIn",
    "ourStory",
    "connect"
  ],

  logo2: ["logo2", "img"],
  img: ["img"],
  underConstruction: ["underConstruction"],
  launchingIn: ["launchingIn"],
  ourStory: ["ourStory"],
  connect: ["connect"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicUnderConstruction__ArgProps,
          internalVariantPropNames: PlasmicUnderConstruction__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUnderConstruction__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "underConstrution2") {
    func.displayName = "PlasmicUnderConstruction";
  } else {
    func.displayName = `PlasmicUnderConstruction.${nodeName}`;
  }
  return func;
}

export const PlasmicUnderConstruction = Object.assign(
  // Top-level PlasmicUnderConstruction renders the root element
  makeNodeComponent("underConstrution2"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),
    logo2: makeNodeComponent("logo2"),
    img: makeNodeComponent("img"),
    underConstruction: makeNodeComponent("underConstruction"),
    launchingIn: makeNodeComponent("launchingIn"),
    ourStory: makeNodeComponent("ourStory"),
    connect: makeNodeComponent("connect"),
    // Metadata about props expected for PlasmicUnderConstruction
    internalVariantProps: PlasmicUnderConstruction__VariantProps,
    internalArgProps: PlasmicUnderConstruction__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicUnderConstruction;
/* prettier-ignore-end */
