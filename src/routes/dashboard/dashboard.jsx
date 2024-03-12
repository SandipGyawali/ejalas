import { lazy } from "react";
const ComplaintRelatedIssue = lazy(
  () => import("@pages/dashboard/complaint-relate-issue"),
);
const PratiwedanList = lazy(() => import("@pages/dashboard/PratiwedanList"));
const MelmilapKartaDarta = lazy(
  () => import("@pages/dashboard/melmilap-karta-darta"),
);
const FeedBack = lazy(() => import("@pages/dashboard/feedback"));
const News = lazy(() => import("@pages/dashboard/news"));
const LikhitUjuri = lazy(() => import("@pages/dashboard/likhit-ujuri"));
const Court = lazy(() => import("@pages/dashboard/court"));

export const dashboard_main = {
  layout: "dashboard",
  pages: [
    {
      path: "get-pratiwedan-list",
      element: <PratiwedanList />,
    },
    {
      path: "melmilapkarta-darta",
      element: <MelmilapKartaDarta />,
    },
    {
      path: "feedback",
      element: <FeedBack />,
    },
    {
      path: "news",
      element: <News />,
    },
    {
      path: "likhit-ujuri",
      element: <LikhitUjuri />,
    },
    {
      path: "court",
      element: <Court />,
    },
    {
      path: "complaint-related-rules",
      element: <ComplaintRelatedIssue />,
    },
  ],
};
