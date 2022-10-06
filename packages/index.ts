import XinButton from "./Button/index.vue"

let components = [
  XinButton
]
export default {
  install(app: any) {
    components.forEach(item => {
      app.component(item.name, item);
    })
  },
}
