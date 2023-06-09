// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qYXJkyifyxfQuqtTDFQCRa
// Component: pcjCVOj-il
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { AntdRadioGroup } from "@plasmicpkgs/antd5/skinny/registerRadio"; // plasmic-import: PZQhrvIGy1/codeComponent
import { AntdRadio } from "@plasmicpkgs/antd5/skinny/registerRadio"; // plasmic-import: -CXVV9tXtP/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_tiny_garden_solutions.module.css"; // plasmic-import: qYXJkyifyxfQuqtTDFQCRa/projectcss
import sty from "./PlasmicMultipleChoiceVraag.module.css"; // plasmic-import: pcjCVOj-il/css

export const PlasmicMultipleChoiceVraag__VariantProps = new Array();

export const PlasmicMultipleChoiceVraag__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicMultipleChoiceVraag__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "radioGroup.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
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
      <div className={classNames(projectcss.all, sty.freeBox___1XqNl)}>
        <div className={classNames(projectcss.all, sty.freeBox___2DVqc)}>
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"What do you do when you are high?"}
          </h1>
          <div className={classNames(projectcss.all, sty.freeBox__lmdqL)} />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___87SWn)}>
          <div className={classNames(projectcss.all, sty.freeBox__aVzNc)}>
            <AntdRadioGroup
              data-plasmic-name={"radioGroup"}
              data-plasmic-override={overrides.radioGroup}
              className={classNames("__wab_instance", sty.radioGroup)}
              onChange={p.generateStateOnChangeProp($state, [
                "radioGroup",
                "value"
              ])}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" }
              ]}
              value={p.generateStateValueProp($state, ["radioGroup", "value"])}
            >
              <AntdRadio
                className={classNames("__wab_instance", sty.radio__v1CqB)}
                value={"op1"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__khLgk
                  )}
                >
                  {"Option 1"}
                </div>
              </AntdRadio>
              <AntdRadio
                className={classNames("__wab_instance", sty.radio__pD6Of)}
                value={"op2"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7A8Qs
                  )}
                >
                  {"Option 2"}
                </div>
              </AntdRadio>
            </AntdRadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "h1", "radioGroup"],
  h1: ["h1"],
  radioGroup: ["radioGroup"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMultipleChoiceVraag__ArgProps,
          internalVariantPropNames: PlasmicMultipleChoiceVraag__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMultipleChoiceVraag__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMultipleChoiceVraag";
  } else {
    func.displayName = `PlasmicMultipleChoiceVraag.${nodeName}`;
  }
  return func;
}

export const PlasmicMultipleChoiceVraag = Object.assign(
  // Top-level PlasmicMultipleChoiceVraag renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    radioGroup: makeNodeComponent("radioGroup"),
    // Metadata about props expected for PlasmicMultipleChoiceVraag
    internalVariantProps: PlasmicMultipleChoiceVraag__VariantProps,
    internalArgProps: PlasmicMultipleChoiceVraag__ArgProps
  }
);

export default PlasmicMultipleChoiceVraag;
/* prettier-ignore-end */
