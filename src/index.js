import Quill from "quill";
import Editor from "@/components/Editor.vue";
import VueEditor from "@/components/VueEditor.vue";

const version = "__VERSION__";

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$add = (a, b) => {
    return a + b;
  };

  Vue.component("Editor", Editor);
  Vue.component("VueEditor", VueEditor);
}

const VPlugin = {
  install,
  version,
  Quill
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(VPlugin);
}

export default VPlugin;
export { VueEditor, Editor, Quill };

/*************************************************/

/** NOTE: Original way commented out. Testing `GlobalVue` way */

// const install = Vue => {
//   /*
//    * Note: if you need to extend Vue contstructor, you can extend it in here.
//    */
//   Vue.prototype.$add = (a, b) => {
//     return a + b;
//   };

//   Vue.component("Editor", Editor);
//   Vue.component("VueEditor", VueEditor);
// };

// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.use(VPlugin);
// }
