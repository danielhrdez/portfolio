import { c as create_ssr_component, e as escape, v as validate_component } from "./index2.js";
import { A as AButton } from "./AButton.js";
const TitlePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let resultText = "";
  let showCursor = true;
  function animateText(text, duration = 0, pctFalseKeys = 0.1) {
    resultText = "";
    const delayChar = duration / text.length;
    for (let i = 0; i < text.length; i++) {
      setTimeout(
        () => {
          resultText += Math.random().toString(36).slice(2, 3);
          setTimeout(
            () => {
              resultText = resultText.slice(0, resultText.length - 1);
              resultText += text[i];
            },
            delayChar * pctFalseKeys
          );
        },
        delayChar * i
      );
    }
    setTimeout(
      () => {
        resultText = text;
      },
      duration
    );
  }
  setInterval(
    () => {
      showCursor = !showCursor;
    },
    750
  );
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  {
    animateText(title, 500, 0.1);
  }
  return `<div class="flex flex-row gap-2"><h1 class="text-3xl font-bold font-mono">${escape(resultText)}</h1>
    <div class="bg-neutral-500 h-[1] w-[1px]" style="${"opacity: " + escape(+showCursor, true)}"></div></div>`;
});
const ArrowLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg fill="none" stroke="currentColor" class="h-6 w-6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 20 4 12l11-8"></path></svg>`;
});
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg fill="none" stroke="currentColor" class="h-6 w-6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9 20 11-8L9 4"></path></svg>`;
});
const PageSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { prevHrefLabel = void 0 } = $$props;
  let { nextHrefLabel = void 0 } = $$props;
  if ($$props.prevHrefLabel === void 0 && $$bindings.prevHrefLabel && prevHrefLabel !== void 0)
    $$bindings.prevHrefLabel(prevHrefLabel);
  if ($$props.nextHrefLabel === void 0 && $$bindings.nextHrefLabel && nextHrefLabel !== void 0)
    $$bindings.nextHrefLabel(nextHrefLabel);
  return `<div class="flex flex-row gap-4"><div class="w-full"></div>

    <div class="w-14">${validate_component(AButton, "AButton").$$render($$result, { hrefLabel: prevHrefLabel }, {}, {
    default: () => {
      return `${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, {}, {}, {})}`;
    }
  })}</div>

    <div class="w-14">${validate_component(AButton, "AButton").$$render($$result, { hrefLabel: nextHrefLabel }, {}, {
    default: () => {
      return `${validate_component(ArrowRight, "ArrowRight").$$render($$result, {}, {}, {})}`;
    }
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { prevHrefLabel = void 0 } = $$props;
  let { nextHrefLabel = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.prevHrefLabel === void 0 && $$bindings.prevHrefLabel && prevHrefLabel !== void 0)
    $$bindings.prevHrefLabel(prevHrefLabel);
  if ($$props.nextHrefLabel === void 0 && $$bindings.nextHrefLabel && nextHrefLabel !== void 0)
    $$bindings.nextHrefLabel(nextHrefLabel);
  return `${validate_component(TitlePage, "TitlePage").$$render($$result, { title }, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(PageSelector, "PageSelector").$$render($$result, { prevHrefLabel, nextHrefLabel }, {}, {})}`;
});
export {
  Page as P
};
