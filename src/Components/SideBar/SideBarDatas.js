import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
const sideBarData = [
    {
      id: 1,
      title: "داشبورد",
      newLi: [
        {
          id: 1,
          link: "/React-Dashboard-Admin/",
          icon: <HomeOutlinedIcon/>,
          linkName: "صفحه اصلی"
        },
        {
          id: 2,
          link: "/React-Dashboard-Admin/dashboard_charts",
        icon: <TimelineOutlinedIcon/>,
          linkName: "نمودار"
        },
        {
          id: 3,
          link: "/React-Dashboard-Admin/sales",
          icon: <AttachMoneyOutlinedIcon/>,
          linkName: "فروش"
        }
      ]
    },
    {
      id: 2,
      title: "دسترسی سریع",
      newLi: [
        {
          id: 4,
          link: "/React-Dashboard-Admin/users",
          icon: <PeopleAltOutlinedIcon/>,
          linkName: "کاربران"
        },
        {
          id: 5,
          link: "/React-Dashboard-Admin/newUser",
          icon: <PersonAddAltOutlinedIcon/>,
          linkName: "کاربران جدید"
        },
        {
        id: 6,
          link: "/React-Dashboard-Admin/products",
          icon: <Inventory2OutlinedIcon/>,
          linkName: "محصولات"
        },
        {
          id: 7,
          link: "/React-Dashboard-Admin/trades",
          icon: <MonetizationOnOutlinedIcon/>,
          linkName: "معاملات"
        },
        {
          id: 8,
          link: "/React-Dashboard-Admin/q_reports",
          icon: <AssessmentOutlinedIcon/>,
          linkName: "گزارشات"
        }
      ]
    },
    {
      id: 3,
      title: "پیام ها",
      newLi: [
        {
          id: 9,
          link: "/React-Dashboard-Admin/emails",
          icon: <EmailOutlinedIcon/>,
          linkName: "ایمیل"
        },
        {
          id: 10,
          link: "/React-Dashboard-Admin/composemail",
          icon: <ChatBubbleOutlineOutlinedIcon/>,
          linkName: "ایمیل جدید"
        },
        {
          id: 11,
          link: "/React-Dashboard-Admin/messages",
          icon: <QuestionAnswerOutlinedIcon/>,
          linkName: "پیام ها"
        }
      ]
    },
    {
      id: 4,
      title: "کارکنان",
      newLi: [
        // {
        //   id: 1,
        //   link: "/React-Dashboard-Admin/administrator",
        //   icon: <WorkOutlineOutlinedIcon/>,
        //   linkName: "مدیریت"
        // },
        {
          id: 1,
          link: "/React-Dashboard-Admin/staff_chart",
          icon: <TimelineOutlinedIcon/>,
          linkName: "نمودار"
        },
        {
          id: 2,
          link: "/React-Dashboard-Admin/staff_reports",
          icon: <ErrorOutlineOutlinedIcon/>,
          linkName: "گزارشات"
        }
      ]
    }
  ]

  export default sideBarData