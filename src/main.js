import { createApp } from 'vue'
import App from './App.vue'

import router from './router'; 
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
/* FREE BRANDS SVG */

// import { faHtml5, faCss3, faJs, faVuejs, faGit, faSass, faFacebookF, faLinkedinIn, faCodepen, faTwitter, faGithub, faNodeJs, faNode, faPhp} from '@fortawesome/free-brands-svg-icons'

/* FREE SOLID SVG */
import { faBars, faSquareCheck, faExclamationCircle, faTasks, faHome, faPlusCircle, faDownload, faSave} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */

// library.add( faHtml5, faCss3, faJs, faVuejs, faGit, faSass, faFacebookF, faLinkedinIn, faCodepen, faTwitter,faBars ,faGithub, faNodeJs, faNode, faPhp, faSquareCheck)

library.add(faSquareCheck, faBars, faExclamationCircle, faTasks, faHome, faPlusCircle, faDownload, faSave)
// createApp(App).use(router).mount('#app')
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')