import { ButtonStyles } from "./models/buttonstyles";

export default defineAppConfig({
    contact: {
        phone: '337-366-4033',
        address: {
            street: "1042 Hammock Lane",
            city: 'Breaux Bridge',
            zip: '70517',
            state: "LA"
        }
    },
    buttonStyle: ButtonStyles.Tortuga,
    licenseKey: "e3de63e4-dda4-40fe-bcc8-d62dcbae121f",
    navigationLinks: [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "components",
            url: "/components"
        },
        {
            name: "Contact",
            url: "/contact"
        },
        {
            name: "Blog",
            url: "/blog"
        }
    ]
})