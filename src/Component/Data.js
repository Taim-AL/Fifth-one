import img1 from '../Assets/images/clients/client-1.png';
import img2 from '../Assets/images/clients/client-2.png';
import img3 from '../Assets/images/clients/client-3.png';
import img4 from '../Assets/images/clients/client-4.png';
import img5 from '../Assets/images/clients/client-5.png';
import img6 from '../Assets/images/clients/client-6.png';
import img7 from '../Assets/images/team/team-1.jpg';
import img8 from '../Assets/images/team/team-2.jpg';
import img9 from '../Assets/images/team/team-3.jpg';
/////////icon
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';

export const DataCard1 =[
    {
        num:"01",
        title:"Lorem Ipsum",
        par:"Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
        ,dur:"500"
    },
    {
        num:"02",
        title:"Repellat Nihil",
        par:"Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest"
        ,dur:"800"
    },
    {
        num:"03",
        title:"Ad ad velit qui",
        par:"Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis"
        ,dur:"1200"
    },
]

export const DataImage = [
    {img : img1},
    {img : img2},
    {img : img3},
    {img : img4},
    {img : img5},
    {img : img6},
]

export const DataCard2 =[
    {icon:<SportsBasketballOutlinedIcon className='icon-card2'/>,
    title:"Lorem Ipsum" ,
    par:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",dur:"500"   },
    {icon:<DescriptionOutlinedIcon className='icon-card2'/>,
    title:"Sed ut perspiciatis" ,
    par:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" ,dur:"800"  },
    {icon:<AccessTimeIcon className='icon-card2'/>,
    title:"Magni Dolores" ,
    par:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"  ,dur:"1200" },
    {icon:<PublicIcon className='icon-card2'/>,
    title:"Nemo Enim" ,
    par:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" ,dur:"500"  },
    {icon:<OndemandVideoIcon className='icon-card2'/>,
    title:"Dele cardo" ,
    par:"Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"  ,dur:"800" },
    {icon:<AccountBalanceIcon className='icon-card2'/>,
    title:"Divera don" ,
    par:"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur" ,dur:"1200"  },
]

export const DataCardTeam = [
    {
        img:img7,
        name:"Walter White",
        title:"Chief Executive Officer",
        par:"Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"
        ,dur:"500"
    },
    {
        img:img8,
        name:"Sarah Jhinson",
        title:"Product Manager",
        par:"Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus"
        ,dur:"800"
    },
    {
        img:img9,
        name:"William Anderson",
        title:"CTO",
        par:"Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara"
        ,dur:"1200"
    },
]

export const DataCardContact = [
    {
        icon:<LocationOnOutlinedIcon className='icon-contact'/>,
        title:"Our Address",
        par:"A108 Adam Street, New York, NY 535022",
        col:"6"
    },
    {
        icon:<EmailOutlinedIcon className='icon-contact'/>,
        title:"Email Us",
        par:"contact@example.com",
        col:"3"
    },
    {
        icon:<WifiCalling3OutlinedIcon className='icon-contact'/>,
        title:"Call Us",
        par:"+1 5589 55488 55",
        col:"3"
    },
]

export const ul1=[
    {title:"Home"},
    {title:"About us"},
    {title:"Services"},
    {title:"Terms of Service"},
    {title:"Privacy policy"},
]

export const ul2=[
    {title:"Web Design"},
    {title:"Web Development"},
    {title:"Product Management"},
    {title:"Marketing"},
    {title:"Graphic Design"},
]