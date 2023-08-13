import { c as create_ssr_component, f as escape, v as validate_component } from "./index2.js";
const MaskedText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 class="font-serif text-md italic bg-transparent dark:bg-transparent"><span class="bg-clip-text text-transparent bg-gradient-to-r from-[#0522FF] to-[#7400C2] dark:from-[#00ff80] dark:to-[#0AFFFB] ">${slots.default ? slots.default({}) : ``}</span></h3>`;
});
const Block = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<article class="bg-gradient-to-r from-neutral-100/90 to-neutral-100/75 dark:from-neutral-700/90 dark:to-neutral-700/75 hover:from-neutral-100/90 hover:to-neutral-100/90 dark:hover:from-neutral-700/90 dark:hover:to-neutral-700/90 p-4 rounded-2xl drop-shadow-md h-full w-full transition-all "><h2 class="text-xl font-bold mr-12">${escape(title)}</h2>
    ${subtitle ? `${validate_component(MaskedText, "MaskedText").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(subtitle)}`;
    }
  })}
        <br>` : ``}
    ${slots.default ? slots.default({}) : ``}</article>`;
});
export {
  Block as B
};
