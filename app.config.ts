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
    licenseKey: "2b8c541a-ccf2-484d-9af9-eac9a3a3a5e6",
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