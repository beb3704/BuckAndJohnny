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
    licenseKey: "41682fc0-bf42-43fd-8ed3-2c7498401939",
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