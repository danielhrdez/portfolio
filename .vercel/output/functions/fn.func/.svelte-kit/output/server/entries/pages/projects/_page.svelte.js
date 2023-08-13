import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/index2.js";
import { P as Page } from "../../../chunks/Page.js";
import { X } from "../../../chunks/runtime.esm.js";
const ProjectCard_svelte_svelte_type_style_lang = "";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  $$unsubscribe_t();
  return `${validate_component(Page, "Page").$$render(
    $$result,
    {
      title: $t("page.projects.title"),
      prevHrefLabel: { href: "/", label: $t("page.about.title") },
      nextHrefLabel: {
        href: "/contact",
        label: $t("page.contact.title")
      }
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-wrap gap-4 justify-center max-w-6xl">${``}</div>`;
      }
    }
  )}`;
});
export {
  Page_1 as default
};
