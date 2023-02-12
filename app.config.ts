import { ButtonStyles } from "./models/buttonstyles";

export default defineAppConfig({
    contact: {
        phone: '225-445-6771',
        address: {
            street: "13292 N Burnside Ave",
            city: 'Gonzales',
            zip: '70737',
            state: "LA"
        },
        hours: 'Mon-Fri 9:00am - 6:00pm'
    },
    buttonStyle: ButtonStyles.Marlin,
    licenseKey: "b50914e7-f63a-4b5e-b7ed-7ab439e7d920",
    navigationLinks: [
        {
            name: "Home",
            url: "/"
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