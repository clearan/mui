import MButton from './index.vue'

MButton.install = app => {
    app.component(MButton.name, MButton)
}

export default MButton