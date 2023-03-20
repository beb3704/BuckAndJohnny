import { AppStyles } from "./models/appstyles";

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
    appStyle: AppStyles.Biscayne,
    licenseKey: "e3de63e4-dda4-40fe-bcc8-d62dcbae121f",
    navigationLinks: [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Entertainment",
            url: "/zydeco-breakfast"
        },
        {
            name: "Special Events",
            url: "/special-events"
        },
        {
            name: "Community & Media",
            url: "/community-and-media"
        }
    ]
})