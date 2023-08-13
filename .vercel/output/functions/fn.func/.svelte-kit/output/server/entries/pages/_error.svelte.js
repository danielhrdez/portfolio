import { c as create_ssr_component, a as subscribe, f as escape, e as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { X } from "../../chunks/runtime.esm.js";
import { A as AButton } from "../../chunks/AButton.js";
const simpson404 = "/_app/immutable/assets/404-simpson.f59e0d38.webm";
const ArrowDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="h-6 w-6 animate-bounce transition-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="
            M 19 14
            l -7 7
            m 0 0
            l -7-7
            m 7 7
            V 3
        "></path></svg>`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="flex w-full justify-center items-center"><div class="flex flex-col gap-4"><strong><h1 class="text-2xl text-center flex justify-between gap-2 text-red-900 dark:text-red-300 "><span>404</span>
				<span>${escape($t("error.notFound"))}</span></h1></strong>
		<p class="text-center">${escape($t("error.notFoundDescription"))}</p>
		<video autoplay loop muted playsinline class="rounded-xl bg-slate-300 dark:bg-slate-600 h-[320px]" width="320"${add_attribute("src", simpson404, 0)}></video>
		${validate_component(AButton, "AButton").$$render(
    $$result,
    {
      hrefLabel: { href: "/", label: $t("page.about.title") }
    },
    {},
    {
      default: () => {
        return `${escape($t("error.notFoundButton"))}
			${validate_component(ArrowDown, "ArrowDown").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</div></div>`;
});
export {
  Error as default
};
