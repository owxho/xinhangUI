
// export * from './Button'
// import XinButton from "../packages/Button"

// const components = [XinButton]
// const install = (app: any) => {
//   components.forEach((item) => {
//     app.use(item)
//   })
// }
// export default install;
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
