import { Icon } from "@iconify/react";

export const list = [
  {
    url: "/admin/dashboard",
    text: "ड्यासबोर्ड",
    icon: <Icon icon="clarity:dashboard-solid" />,
  },
  {
    url: "/admin/complain",
    text: "विवाद",
    icon: <Icon icon="tabler:messages" />,
  },
  {
    url: "/admin/court",
    text: "न्यायिक समिति",
    icon: <Icon icon="mdi:court-hammer" />,
  },
  {
    url: "/admin/likhit-ujuri",
    text: " लिखित",
    icon: <Icon icon="jam:write-f" />,
  },
  {
    url: "/admin/cases",
    text: "केसहरु",
    icon: <Icon icon="ri:file-4-fill" />,
  },
  {
    url: "/admin/news",
    text: "सूचना",
    icon: <Icon icon="fluent:news-24-filled" />,
  },
  {
    url: "/admin/feedback",
    text: "गुनासो फर्वार्ड",
    icon: <Icon icon="mdi:message-bubble" />,
  },
  {
    url: "/admin/melmilapkarta-darta",
    text: " मेलमिलापकर्ता दर्ता",
    icon: <Icon icon="fa6-solid:handshake" />,
  },
  {
    nestedList: true,
    heading: "प्रयोगकर्ता व्यवस्थापन",
    icon: <Icon icon="fa6-solid:list" />,
    list: [
      {
        url: "/admin/user",
        text: "प्रयोगकर्ता",
        icon: <Icon icon="fa-solid:user" />,
      },
      {
        url: "/admin/role",
        text: "भूमिका",
        icon: <Icon icon="fa-regular:user" />,
      },
      {
        url: "/admin/permission-management",
        text: "अनुमति",
        icon: <Icon icon="tabler:checkup-list" />,
      },
      {
        url: "/settings",
        text: "पृष्ठ सेटिंग्समिलाउनुहोस",
        icon: <Icon icon="system-uicons:document-list" />,
      },
      {
        url: "/admin/user-mapping/save",
        text: "प्रयोगकर्ता अदालत म्यापिङ",
        icon: <Icon icon="fa-regular:user" />,
      },
    ],
  },
  {
    nestedList: true,
    heading: "मास्टर डाटा व्यवस्थापन",
    icon: <Icon icon="fa6-solid:list" />,
    list: [
      {
        url: "/admin/complaint-type",
        text: "विवादको प्रकार",
        icon: <Icon icon="tabler:messages" />,
      },
      {
        url: "/admin/court-type",
        text: "न्यायिक समितिको प्रकार",
        icon: <Icon icon="material-symbols:menu-book" />,
      },
      {
        url: "/admin/about-us",
        text: "हाम्रो बारेमा",
        icon: <Icon icon="material-symbols:info" />,
      },
      {
        url: "/admin/ward",
        text: "वडा",
        icon: <Icon icon="fa-solid:address-book" />,
      },
      {
        url: "/admin/melmilapKarta",
        text: "मेलमिलापकर्ता",
        icon: <Icon icon="mdi:users" />,
      },
      {
        url: "/department",
        text: "विभाग",
        icon: <Icon icon="mdi:building" />,
      },
    ],
  },
  {
    url: "/admin/complaint-related-rules",
    text: "विवादको नियम र दफा",
    icon: <Icon icon="bxs:file" />,
  },
  {
    url: "/admin/get-pratiwedan-list",
    text: "प्रतिवेदन",
    icon: <Icon icon="bxs:file" />,
  },
];
