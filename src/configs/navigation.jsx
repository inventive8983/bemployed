import {FaUser, FaBox, FaWpforms, FaListAlt, FaPlus} from "react-icons/fa";
import { RiHome6Fill } from "react-icons/ri";

const NavigationConfig = [
    {   
        key: "dashboard",
        title: "Home",
        icon: RiHome6Fill,
        path: '/dashboard'
    },
    {   
        key: "job",
        title: "Jobs",
        icon: FaListAlt,
        path: '/jobs',
        cta: {
            icon: <FaPlus/>,
            caption: "New Job",
            route: '/app/jobs/create'
        }
    },

    {   
        key: "candidates",
        title: "Candidates",
        icon: FaUser,
        path: '/candidates'
    },
    {
        key:"billing-2",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/registration-fees',
    },
    {
        key:"billing",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/registration-fees',
        hidden: true
    },
    {
        key:"billing-2",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/providing-charges',
        hidden: true
    },
    {
        key:"billing-3",
        title: "Billing",
        icon: FaWpforms,
        path: '/billing/salary-commisions',
        hidden: true
    },
    {
        key:"settings",
        title: "Settings",
        icon: FaBox,
        path: '/settings',
        hidden: true
    }
]


export default NavigationConfig