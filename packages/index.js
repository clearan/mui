import MButton from './button/index.js'
import MInput from './input/index.js'

const install = app => {
    app.use(MButton)
    app.use(MInput)
}

const MUI = {
    install
}

export {MButton, MInput}
export default MUI