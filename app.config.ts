import { ButtonStyles } from "./models/buttonstyles";

export default defineAppConfig({
    contact: {
        phone: '210.260.1145',
        address: {
            street: "1042 Hammock Lane",
            city: 'Breaux Bridge',
            zip: '70517',
            state: "LA"
        }
    },
    buttonStyle: ButtonStyles.Marlin,
    licenseKey: "e3de63e4-dda4-40fe-bcc8-d62dcbae121f",
    navigationLinks: [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Pools & Spas",
            url: "/pools-and-spas"
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