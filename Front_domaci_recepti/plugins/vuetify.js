import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        'sum-red': '#E30613',
                        'sum-blue': '#123F70',
                    },
                },
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})