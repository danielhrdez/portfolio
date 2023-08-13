import { g as getContext, c as create_ssr_component, a as subscribe, b as createEventDispatcher, d as get_store_value, v as validate_component, e as add_attribute, f as escape, h as each } from "../../chunks/index2.js";
import { X, z, y, O, $ } from "../../chunks/runtime.esm.js";
import { w as writable } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
import { B as Block } from "../../chunks/Block.js";
import { inject } from "@vercel/analytics";
const danielWebp = "data:image/webp;base64,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";
const settingsIcon = "/_app/immutable/assets/settings-btn.2ba372a2.svg";
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
  createEventDispatcher();
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
	<button>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: settingsIcon,
      alt: "settings",
      className: "hover:rotate-90 hover-scale transition-all"
    },
    {},
    {}
  )}</button>
	<div class="bg-neutral-100 dark:bg-neutral-700 w-full h-full absolute inset-0 -z-10 "></div></header>`;
});
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { left = "On" } = $$props;
  let { right = "Off" } = $$props;
  let { checked = false } = $$props;
  createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  return `<div class="flex flex-col bg-transparent dark:bg-transparent items-center w-full "><h2 class="text-xl">${escape(title)}</h2>
    <label class="w-full"><input class="sr-only" type="checkbox"${add_attribute("checked", checked, 1)}>
        <div class="flex bg-neutral-300/75 dark:bg-neutral-700/75 cursor-pointer rounded-xl h-6 relative "><p class="${"bg-[#b7a6e6] dark:bg-[#0bb88d] px-2 rounded-full absolute w-20 " + escape(checked ? "left-[calc(100%-5rem)]" : "left-0", true) + " text-center hover-scale hover:drop-shadow-md transition-all"}">${escape(checked ? right : left)}</p></div></label></div>`;
});
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
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showClass;
  let { show } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  showClass = show ? "block" : "hidden";
  return `<dialog class="${"" + escape(showClass, true) + " absolute bg-white/50 text-black dark:text-white dark:bg-black/50 backdrop-blur-sm h-screen w-screen flex justify-center items-center z-30"}">${slots.default ? slots.default({}) : ``}</dialog>`;
});
const settingsExit = "/_app/immutable/assets/settings-exit.06c289c8.svg";
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let { show = false } = $$props;
  let { dark = false } = $$props;
  let { lang = Lang.ENGLISH } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  $$unsubscribe_t();
  return `${validate_component(Modal, "Modal").$$render($$result, { show }, {}, {
    default: () => {
      return `<div class="min-w-[255px] div-bg-color rounded-2xl">${validate_component(Block, "Block").$$render($$result, { title: $t("settings.title") }, {}, {
        default: () => {
          return `<img loading="lazy"${add_attribute("src", settingsExit, 0)} alt="settings" class="absolute top-0 right-0 w-5 h-5 m-6 cursor-pointer dark:invert hover-scale transition-all">
            ${validate_component(Switch, "Switch").$$render(
            $$result,
            {
              title: $t("settings.mode"),
              left: $t("settings.light"),
              right: $t("settings.dark"),
              checked: dark
            },
            {},
            {}
          )}
            <br>
            ${validate_component(Switch, "Switch").$$render(
            $$result,
            {
              title: $t("settings.lang"),
              left: $t("settings.en"),
              right: $t("settings.es"),
              checked: lang.startsWith("es")
            },
            {},
            {}
          )}`;
        }
      })}</div>`;
    }
  })}`;
});
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
  return `<div class="flex flex-col h-screen justify-center items-center"><h1 class="text-xl font-bold">Loading</h1>
    <p class="italic">Please wait${escape(dots)}</p>
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
const app = "";
y(Lang.ENGLISH, () => import("../../chunks/en.js"));
y(Lang.SPANISH, () => import("../../chunks/es.js"));
O({
  fallbackLocale: Lang.ENGLISH,
  initialLocale: get_store_value(preferences).lang
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
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let useSkeleton;
  let $$unsubscribe_isLoading;
  $$unsubscribe_isLoading = subscribe($, (value) => value);
  inject({ mode: "production" });
  let showSettings = false;
  let dark = false;
  let lang = Lang.ENGLISH;
  let isLoaded = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    useSkeleton = !isLoaded;
    $$rendered = `${useSkeleton ? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}` : `<div class="h-screen flex flex-col div-color">${validate_component(Settings, "Settings").$$render(
      $$result,
      { dark, lang, show: showSettings },
      {
        show: ($$value) => {
          showSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		<div class="h-full overflow-auto"><div class="flex gap-4 justify-center items-center h-full flex-wrap"><main class="flex flex-col gap-4 p-4 relative">${slots.default ? slots.default({}) : ``}</main></div></div>
		${validate_component(WavesCanvas, "WavesCanvas").$$render($$result, {}, {}, {})}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_isLoading();
  return $$rendered;
});
export {
  Layout as default
};
