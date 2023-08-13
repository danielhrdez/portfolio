import { c as create_ssr_component, a as add_attribute } from "./index2.js";
const FadeIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { durationMs = 0 } = $$props;
  let opacityDiv;
  if ($$props.durationMs === void 0 && $$bindings.durationMs && durationMs !== void 0)
    $$bindings.durationMs(durationMs);
  return `<div class="flex"${add_attribute("this", opacityDiv, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  FadeIn as F
};
