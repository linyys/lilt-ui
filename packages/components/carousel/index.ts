import carousel from './src/carousel.vue'
import carouselItem from './src/carouselItem.vue'
import { withInstall } from '@lilt-ui-vue/utils/with-install'

const LCarousel = withInstall(carousel)
const LCarouselItem = withInstall(carouselItem)
export { LCarousel, LCarouselItem }
export default { LCarousel, LCarouselItem }
