import { c as create_ssr_component, d as subscribe, v as validate_component, e as escape, a as add_attribute } from "../../../chunks/index2.js";
import { B as Block, F as FadeIn } from "../../../chunks/FadeIn.js";
import { X } from "../../../chunks/runtime.esm.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { P as Page } from "../../../chunks/Page.js";
const MailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let { email: email2 } = $$props;
  let { subjectPlaceholder } = $$props;
  let { messagePlaceholder } = $$props;
  let subject = "";
  if ($$props.email === void 0 && $$bindings.email && email2 !== void 0)
    $$bindings.email(email2);
  if ($$props.subjectPlaceholder === void 0 && $$bindings.subjectPlaceholder && subjectPlaceholder !== void 0)
    $$bindings.subjectPlaceholder(subjectPlaceholder);
  if ($$props.messagePlaceholder === void 0 && $$bindings.messagePlaceholder && messagePlaceholder !== void 0)
    $$bindings.messagePlaceholder(messagePlaceholder);
  $$unsubscribe_t();
  return `${validate_component(Block, "Block").$$render($$result, { title: $t("page.contact.mail") }, {}, {
    default: () => {
      return `<form action="" enctype="text/plain">${escape($t("page.contact.subject"))}:<br>
		<input type="text" name="subject"${add_attribute("placeholder", subjectPlaceholder, 0)} class="w-full" minlength="2"${add_attribute("value", subject, 0)}><br>
		${escape($t("page.contact.message"))}:<br>
		<textarea${add_attribute("placeholder", messagePlaceholder, 0)} class="w-full resize-none" rows="5" cols="5" minlength="2">${""}</textarea><br>
		<input type="submit"${add_attribute("value", $t("page.contact.send"), 0)} class="cursor-pointer hover:text-green-500">
		<input type="reset"${add_attribute("value", $t("page.contact.reset"), 0)} class="cursor-pointer hover:text-red-500"></form>`;
    }
  })}`;
});
const emailIcon = "/_app/immutable/assets/email.20718a93.svg";
const linkedInIcon = "/_app/immutable/assets/linked-in.3bf311fd.svg";
const githubIcon = "/_app/immutable/assets/github.2693557d.svg";
const AIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { src } = $$props;
  let { alt } = $$props;
  let { className = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<a${add_attribute("href", href, 0)}>${validate_component(Icon, "Icon").$$render($$result, { src, alt, className }, {}, {})}</a>`;
});
const ContactLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { email: email2 } = $$props;
  let { linkedIn: linkedIn2 } = $$props;
  let { github: github2 } = $$props;
  if ($$props.email === void 0 && $$bindings.email && email2 !== void 0)
    $$bindings.email(email2);
  if ($$props.linkedIn === void 0 && $$bindings.linkedIn && linkedIn2 !== void 0)
    $$bindings.linkedIn(linkedIn2);
  if ($$props.github === void 0 && $$bindings.github && github2 !== void 0)
    $$bindings.github(github2);
  return `${validate_component(Block, "Block").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-row sm:flex-col justify-between h-full items-center ">${validate_component(AIcon, "AIcon").$$render(
        $$result,
        {
          src: githubIcon,
          alt: "GitHub",
          href: github2
        },
        {},
        {}
      )}
		${validate_component(AIcon, "AIcon").$$render(
        $$result,
        {
          src: linkedInIcon,
          alt: "LinkedIn",
          href: linkedIn2
        },
        {},
        {}
      )}
		${validate_component(AIcon, "AIcon").$$render(
        $$result,
        {
          src: emailIcon,
          alt: "E-mail",
          href: `mailto:${email2}`
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const email = "contact@danielhrdez.dev";
const linkedIn = "https://www.linkedin.com/in/danihrdez/";
const github = "https://www.github.com/DanielHrdez";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subjectPlaceholder;
  let messagePlaceholder;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  subjectPlaceholder = $t("page.contact.subjectPlaceholder");
  messagePlaceholder = $t("page.contact.messagePlaceholder");
  $$unsubscribe_t();
  return `${validate_component(Page, "Page").$$render(
    $$result,
    {
      title: $t("page.contact.title"),
      prevHrefLabel: {
        href: "/projects",
        label: $t("page.projects.title")
      }
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col sm:flex-row gap-4">${validate_component(FadeIn, "FadeIn").$$render($$result, { durationMs: 500 }, {}, {
          default: () => {
            return `${validate_component(MailForm, "MailForm").$$render(
              $$result,
              {
                email,
                subjectPlaceholder,
                messagePlaceholder
              },
              {},
              {}
            )}`;
          }
        })}
		${validate_component(FadeIn, "FadeIn").$$render($$result, { durationMs: 750 }, {}, {
          default: () => {
            return `${validate_component(ContactLinks, "ContactLinks").$$render($$result, { email, github, linkedIn }, {}, {})}`;
          }
        })}</div>`;
      }
    }
  )}`;
});
export {
  Page_1 as default
};
