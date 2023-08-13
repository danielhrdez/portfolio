import { c as create_ssr_component, e as add_attribute } from "./index2.js";
const AButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hrefLabel = void 0 } = $$props;
  if ($$props.hrefLabel === void 0 && $$bindings.hrefLabel && hrefLabel !== void 0)
    $$bindings.hrefLabel(hrefLabel);
  return `${hrefLabel ? `<a class="abutton transition-all"${add_attribute("href", hrefLabel.href, 0)} style="opacity: 1"${add_attribute("aria-label", hrefLabel.label, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<div class="abutton hover:scale-100" style="opacity: .5">${slots.default ? slots.default({}) : ``}</div>`}`;
});
export {
  AButton as A
};
