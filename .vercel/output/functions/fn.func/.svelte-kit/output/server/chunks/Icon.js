import { c as create_ssr_component, e as add_attribute, f as escape } from "./index2.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { className = "" } = $$props;
  let { invert = true } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.invert === void 0 && $$bindings.invert && invert !== void 0)
    $$bindings.invert(invert);
  return `<img loading="lazy"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="${"w-8 h-8 " + escape(invert ? "dark:invert" : "", true) + " " + escape(className, true)}">`;
});
export {
  Icon as I
};
