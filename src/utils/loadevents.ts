import detectColorScheme from "./detectcolorscheme";

export function beforeLoad(): void {
  detectColorScheme();
}

export function afterLoad(): void {
  document.body.className = "";
}

export default {
  beforeLoad,
  afterLoad,
};
