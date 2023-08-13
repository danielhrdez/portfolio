import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute, g as getContext, b as get_store_value, d as subscribe, f as each } from "../../chunks/index2.js";
import { z, X, y, O, $ } from "../../chunks/runtime.esm.js";
import { w as writable } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
import { inject } from "@vercel/analytics";
const Circle_svelte_svelte_type_style_lang = "";
const Circle2_svelte_svelte_type_style_lang = "";
const Circle3_svelte_svelte_type_style_lang = "";
const DoubleBounce_svelte_svelte_type_style_lang = "";
const GoogleSpin_svelte_svelte_type_style_lang = "";
const ScaleOut_svelte_svelte_type_style_lang = "";
const SpinLine_svelte_svelte_type_style_lang = "";
const Stretch_svelte_svelte_type_style_lang = "";
const BarLoader_svelte_svelte_type_style_lang = "";
const Jumper_svelte_svelte_type_style_lang = "";
const RingLoader_svelte_svelte_type_style_lang = "";
const SyncLoader_svelte_svelte_type_style_lang = "";
const Rainbow_svelte_svelte_type_style_lang = "";
const Firework_svelte_svelte_type_style_lang = "";
const Pulse_svelte_svelte_type_style_lang = "";
const Jellyfish_svelte_svelte_type_style_lang = "";
const Chasing_svelte_svelte_type_style_lang = "";
const Square_svelte_svelte_type_style_lang = "";
const Shadow_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-5bpnhx{position:relative;display:flex;justify-content:center;align-items:center;width:var(--size);height:var(--size)}.shadow.svelte-5bpnhx{color:var(--color);font-size:var(--size);overflow:hidden;width:var(--size);height:var(--size);border-radius:50%;margin:28px auto;position:relative;transform:translateZ(0);animation:svelte-5bpnhx-load var(--duration) infinite ease, svelte-5bpnhx-round var(--duration) infinite ease}.pause-animation.svelte-5bpnhx{animation-play-state:paused}@keyframes svelte-5bpnhx-load{0%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,\n				0 -0.83em 0 -0.477em}5%,95%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,\n				0 -0.83em 0 -0.477em}10%,59%{box-shadow:0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em,\n				-0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em}20%{box-shadow:0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em,\n				-0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em}38%{box-shadow:0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em,\n				-0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em}100%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,\n				0 -0.83em 0 -0.477em}}@keyframes svelte-5bpnhx-round{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Shadow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "1.7s" } = $$props;
  let { size = "60" } = $$props;
  let { pause = false } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css);
  return `<div class="wrapper svelte-5bpnhx" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --color: " + escape(color, true) + "; --duration: " + escape(duration, true) + ";"}"><div class="${["shadow svelte-5bpnhx", pause ? "pause-animation" : ""].join(" ").trim()}"></div>
</div>`;
});
const Moon_svelte_svelte_type_style_lang = "";
const Plane_svelte_svelte_type_style_lang = "";
const Diamonds_svelte_svelte_type_style_lang = "";
const Clock_svelte_svelte_type_style_lang = "";
const Wave_svelte_svelte_type_style_lang = "";
const Puff_svelte_svelte_type_style_lang = "";
const ArrowDown_svelte_svelte_type_style_lang = "";
const ArrowUp_svelte_svelte_type_style_lang = "";
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dots;
  let numberDots = 0;
  setInterval(
    () => {
      numberDots = (numberDots + 1) % 4;
    },
    500
  );
  dots = ".".repeat(numberDots);
  return `<div class="flex flex-col h-screen justify-center items-center bg-transparent"><h1 class="text-xl"><strong>Loading</strong></h1>
	<i>Please wait${escape(dots)}</i>
	<br>
	${validate_component(Shadow, "Shadow").$$render(
    $$result,
    {
      size: "50",
      color: "black",
      duration: "2s"
    },
    {},
    {}
  )}</div>`;
});
const WavesCanvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { numberOfWaves = 10 } = $$props;
  let canvas;
  let width = 0;
  let height = 0;
  if ($$props.numberOfWaves === void 0 && $$bindings.numberOfWaves && numberOfWaves !== void 0)
    $$bindings.numberOfWaves(numberOfWaves);
  return `

<canvas class="absolute inset-0 -z-10 blur-xl opacity-50 dark:opacity-25 h-full w-full"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("this", canvas, 0)}></canvas>
<div class="absolute -z-20 div-bg-color w-full h-full"></div>`;
});
const danielWebp = "data:image/webp;base64,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";
const menuIcon = "/_app/immutable/assets/menu-icon.7a9847ab.svg";
const getStores = () => {
  const stores2 = getContext("__svelte__");
  return {
    page: {
      subscribe: stores2.page.subscribe
    },
    navigating: {
      subscribe: stores2.navigating.subscribe
    },
    updated: stores2.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var stores = {};
function getStorage(type) {
  return type === "local" ? localStorage : sessionStorage;
}
function persisted(key, initialValue, options) {
  const serializer = (options == null ? void 0 : options.serializer) ?? JSON;
  const storageType = (options == null ? void 0 : options.storage) ?? "local";
  const browser = typeof window !== "undefined" && typeof document !== "undefined";
  function updateStorage(key2, value) {
    if (!browser)
      return;
    getStorage(storageType).setItem(key2, serializer.stringify(value));
  }
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
      const json = browser ? getStorage(storageType).getItem(key) : null;
      if (json) {
        set2(serializer.parse(json));
      }
      if (browser) {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? serializer.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
var Lang = /* @__PURE__ */ ((Lang2) => {
  Lang2["ENGLISH"] = "en";
  Lang2["SPANISH"] = "es";
  return Lang2;
})(Lang || {});
const preferences = persisted("preferences", {
  theme: "system",
  lang: z() || "en"
  /* ENGLISH */
});
const ToggleLanguage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang = Lang.ENGLISH } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  return `<button class="w-10 h-10">${lang === Lang.ENGLISH ? `${escape(Lang.ENGLISH.toUpperCase())}` : `${escape(Lang.SPANISH.toUpperCase())}`}</button>`;
});
const ToggleTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="w-6 h-6">${`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 256 256"><path d="M127.9 192.5A64.7 64.7 0 1 1 128 63a64.7 64.7 0 0 1-.1 129.4zM110 50.9a2.8 2.8 0 0 1-2.6-3.9l17.9-43.8a2.8 2.8 0 0 1 5.2 0L148.3 47a2.8 2.8 0 0 1-3.2 3.8 81 81 0 0 0-35 0zm17.9 203.4c-1.2 0-2.2-.7-2.6-1.7l-17.9-44a2.8 2.8 0 0 1 3.2-3.7 80.9 80.9 0 0 0 34.5 0 2.8 2.8 0 0 1 3.2 3.8l-17.8 43.9a3 3 0 0 1-2.6 1.7zM48 148.5c-.3 0-.6 0-1-.2L3.2 130.5a2.8 2.8 0 0 1 0-5.2L47 107.4a2.8 2.8 0 0 1 3.8 3.2 81 81 0 0 0 0 34.5 2.8 2.8 0 0 1-2.7 3.4zm159.6 0a2.8 2.8 0 0 1-2.7-3.4 81.3 81.3 0 0 0 0-34.5 2.8 2.8 0 0 1 3.8-3.2l43.9 17.9a2.8 2.8 0 0 1 0 5.2l-44 17.8-1 .2zM58.8 86.9h-.2a3 3 0 0 1-2.4-1.7L37.8 41.5a2.8 2.8 0 0 1 3.7-3.7l43.7 18.4a2.8 2.8 0 0 1 .4 5 81.2 81.2 0 0 0-24.4 24.4c-.5.8-1.4 1.3-2.4 1.3zM215.3 218l-1.1-.1-43.6-18.4a2.8 2.8 0 0 1-.5-5 81 81 0 0 0 24.4-24.4 3 3 0 0 1 2.6-1.2c1 0 2 .7 2.4 1.7l18.4 43.6a2.8 2.8 0 0 1-2.6 3.9zM196.9 86.9c-1 0-1.9-.5-2.4-1.3a81 81 0 0 0-24.4-24.4 2.8 2.8 0 0 1 .5-5l43.6-18.4a2.8 2.8 0 0 1 3.7 3.7l-18.4 43.7a2.8 2.8 0 0 1-2.6 1.7zM40.4 218a2.8 2.8 0 0 1-2.6-3.8l18.4-43.6c.4-1 1.4-1.7 2.4-1.7 1-.2 2 .4 2.6 1.2a81 81 0 0 0 24.4 24.4 2.8 2.8 0 0 1-.4 5l-43.7 18.4-1 .2z"></path></svg>`}</button>`;
});
function moveIndicator(navBar2, oldTab, newTab2) {
  let transitionWidth = 0;
  const isRight = oldTab?.compareDocumentPosition(newTab2) === 4;
  const newWidth = newTab2.offsetWidth / navBar2.offsetWidth;
  const newPosition = newTab2.offsetLeft + "px";
  if (oldTab !== null) {
    if (isRight) {
      transitionWidth = newTab2.offsetLeft + newTab2.offsetWidth - oldTab.offsetLeft;
    } else {
      transitionWidth = oldTab.offsetLeft + oldTab.offsetWidth - newTab2.offsetLeft;
      navBar2.style.setProperty("--_left", newPosition);
    }
    navBar2.style.setProperty("--_width", transitionWidth / navBar2.offsetWidth + "");
  }
  setTimeout(
    () => {
      navBar2.style.setProperty("--_left", newPosition);
      navBar2.style.setProperty("--_width", newWidth + "");
    },
    200
  );
}
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  var Route = ((Route2) => {
    Route2["ABOUT"] = "/";
    Route2["PROJECTS"] = "/projects";
    Route2["CONTACT"] = "/contact";
    return Route2;
  })(Route || {});
  let navBar;
  let newTab = writable(null);
  let width = 0;
  links = [
    {
      href: "/",
      /* ABOUT */
      text: $t("page.about.title"),
      active: "/" === $page.route.id
      /* ABOUT */
    },
    {
      href: "/projects",
      /* PROJECTS */
      text: $t("page.projects.title"),
      active: "/projects" === $page.route.id
      /* PROJECTS */
    },
    {
      href: "/contact",
      /* CONTACT */
      text: $t("page.contact.title"),
      active: "/contact" === $page.route.id
      /* CONTACT */
    }
  ];
  {
    if ($page && width) {
      setTimeout(
        () => {
          let oldTab = get_store_value(newTab);
          newTab.set(document.querySelector(".nav-a-active"));
          if (newTab !== null) {
            moveIndicator(navBar, oldTab, get_store_value(newTab));
          }
        },
        10
      );
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `

<header class="flex justify-between gap-[15vw] py-1 px-3 drop-shadow-sm z-20 "><button class="sm:hidden">${validate_component(Icon, "Icon").$$render($$result, { src: menuIcon, alt: "menu" }, {}, {})}</button>
	<img${add_attribute("src", danielWebp, 0)} alt="me" class="w-10 h-10 rounded-md">
	<nav class="${"flex absolute sm:relative flex-row justify-between items-start sm:items-center " + escape("-top-20", true) + " sm:top-0 container bg-neutral-100 dark:bg-neutral-700 px-4 sm:pl-0 pb-2 sm:pb-0 left-0 rounded-b-xl sm:rounded-none " + escape("", true) + " sm:drop-shadow-none -z-10 sm:z-10"}"${add_attribute("this", navBar, 0)}>${each(links, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="${"" + escape(
      link.active ? `
						nav-a-active
						text-black
						dark:text-white
					` : "text-neutral-500 dark:text-neutral-400",
      true
    )}">${escape(link.text)}
			</a>`;
  })}</nav>
	<div class="flex items-center">${validate_component(ToggleTheme, "ToggleTheme").$$render($$result, {}, {}, {})}
		${validate_component(ToggleLanguage, "ToggleLanguage").$$render($$result, {}, {}, {})}</div>
	<div class="bg-neutral-100 dark:bg-neutral-700 w-full h-full absolute inset-0 -z-10 "></div></header>`;
});
const app = "";
y(Lang.ENGLISH, () => import("../../chunks/en.js"));
y(Lang.SPANISH, () => import("../../chunks/es.js"));
O({
  fallbackLocale: Lang.ENGLISH,
  initialLocale: get_store_value(preferences).lang
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let useLoader;
  let $$unsubscribe_isLoading;
  $$unsubscribe_isLoading = subscribe($, (value) => value);
  inject({ mode: "production" });
  let isLoaded = false;
  useLoader = !isLoaded;
  $$unsubscribe_isLoading();
  return `<div class="h-screen flex flex-col div-color">${useLoader ? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}` : `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<div class="h-full overflow-auto"><div class="flex gap-4 justify-center items-center h-full flex-wrap"><main class="flex flex-col gap-4 p-4 relative">${slots.default ? slots.default({}) : ``}</main></div></div>`}
	${validate_component(WavesCanvas, "WavesCanvas").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
