import { AppStyles } from "./models/appstyles";

export default defineAppConfig({
    contact: {
        phone: '337-442-6630',
        address: {
            street: "100 Berard St.",
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
            url: "/entertainment"
        },
        {
            name: "Special Events",
            url: "/special-events"
        },
        {
            name: "Community & Media",
            url: "/blog"
        }
    ]
})