import { c as create_ssr_component, d as subscribe, v as validate_component, f as each, e as escape, a as add_attribute } from "../../chunks/index2.js";
import { B as Block, F as FadeIn } from "../../chunks/FadeIn.js";
import { t as te, X, $ } from "../../chunks/runtime.esm.js";
import { P as Page } from "../../chunks/Page.js";
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let description;
  let $json, $$unsubscribe_json;
  let $t, $$unsubscribe_t;
  let $isLoading, $$unsubscribe_isLoading;
  $$unsubscribe_json = subscribe(te, (value) => $json = value);
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  $$unsubscribe_isLoading = subscribe($, (value) => $isLoading = value);
  description = $json("page.about.me.description");
  $$unsubscribe_json();
  $$unsubscribe_t();
  $$unsubscribe_isLoading();
  return `${validate_component(Block, "Block").$$render(
    $$result,
    {
      title: "Daniel Hernández de León",
      subtitle: $t("page.about.me.job")
    },
    {},
    {
      default: () => {
        return `${$isLoading ? `Loading...` : `${description.length === 0 ? `No data` : `<div class="max-w-[40ch] sm:max-w-[60ch] flex flex-col gap-3 leading-5">${each(description, (line) => {
          return `<p>${escape(line)}</p>`;
        })}</div>`}`}`;
      }
    }
  )}`;
});
const Entity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { entity } = $$props;
  let { interval } = $$props;
  let { url } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.entity === void 0 && $$bindings.entity && entity !== void 0)
    $$bindings.entity(entity);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="flex flex-col bg-transparent dark:bg-transparent gap-1 max-w-2xl"><div class="flex flex-row justify-between bg-transparent dark:bg-transparent"><h2 class="text-xl">${escape(title)}</h2>
		<h2 class="text-xl"><a${add_attribute("href", url, 0)} target="_blank" rel="noopener noreferrer">${escape(entity)}</a></h2></div>
	<h3 class="text-sm text-neutral-600 dark:text-[#D6D6D6]">${escape(interval[0])} - ${escape(interval[1])}</h3>
	<div class="max-w-[40ch] sm:max-w-[60ch] flex flex-col gap-3 leading-5">${each(description, (line) => {
    return `<p>${escape(line)}</p>`;
  })}</div></div>`;
});
const HomeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let entities;
  let title;
  let $t, $$unsubscribe_t;
  let $json, $$unsubscribe_json;
  let $isLoading, $$unsubscribe_isLoading;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  $$unsubscribe_json = subscribe(te, (value) => $json = value);
  $$unsubscribe_isLoading = subscribe($, (value) => $isLoading = value);
  let { type = "education" } = $$props;
  let typeString = "";
  if (type === "education") {
    typeString = "page.about.education";
  } else if (type === "experience") {
    typeString = "page.about.experience";
  }
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  entities = [];
  {
    if (type === "education") {
      entities = $json(`${typeString}.degrees`);
    } else if (type === "experience") {
      entities = $json(`${typeString}.companies`);
    }
  }
  title = $t(`${typeString}.title`);
  $$unsubscribe_t();
  $$unsubscribe_json();
  $$unsubscribe_isLoading();
  return `${validate_component(Block, "Block").$$render($$result, { title }, {}, {
    default: () => {
      return `${$isLoading ? `Loading...` : `${entities.length === 0 ? `No data` : `${each(entities, ({ title: title2, entity, description, from, to, url }) => {
        return `${validate_component(Entity, "Entity").$$render(
          $$result,
          {
            title: title2,
            entity,
            interval: [from, to],
            url,
            description
          },
          {},
          {}
        )}`;
      })}`}`}`;
    }
  })}`;
});
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HomeBlock, "HomeBlock").$$render($$result, { type: "experience" }, {}, {})}`;
});
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HomeBlock, "HomeBlock").$$render($$result, { type: "education" }, {}, {})}`;
});
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  const durations = [500, 750, 1e3];
  $$unsubscribe_t();
  return `

${validate_component(Page, "Page").$$render(
    $$result,
    {
      title: $t("page.about.title"),
      nextHrefLabel: {
        href: "/projects",
        label: $t("page.projects.title")
      }
    },
    {},
    {
      default: () => {
        return `${`<div class="flex flex-col gap-4">${validate_component(FadeIn, "FadeIn").$$render($$result, { durationMs: durations[0] }, {}, {
          default: () => {
            return `${validate_component(Description, "Description").$$render($$result, {}, {}, {})}`;
          }
        })}
			${validate_component(FadeIn, "FadeIn").$$render($$result, { durationMs: durations[1] }, {}, {
          default: () => {
            return `${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}`;
          }
        })}
			${validate_component(FadeIn, "FadeIn").$$render($$result, { durationMs: durations[2] }, {}, {
          default: () => {
            return `${validate_component(Education, "Education").$$render($$result, {}, {}, {})}`;
          }
        })}</div>`}`;
      }
    }
  )}`;
});
export {
  Page_1 as default
};
