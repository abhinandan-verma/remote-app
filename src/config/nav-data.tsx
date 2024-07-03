import { BriefcaseBusinessIcon, HomeIcon } from "lucide-react";
import React from "react";

export interface Nav {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: Nav[];
}

export const NAV: Nav[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon />,
    children: [
      {
        title: "Remote Jobs",
        href: "#remote-jobs",
        icon: <BriefcaseBusinessIcon className="p-1" />
      },
      {
        title: "Hire Remote Workers",
        href: "/hire-remote-workers",
        icon: "🧑🏼‍💻"
      },
      {
        title: "Post a Job",
        href: "/post-a-job",
        icon: "plus",
      },
      {
        title: "Remote Work Blog",
        href: "/remote-work-blog",
        icon: "book",
      },
      {
        title: "Compact Mode",
        href: "/compact-mode",
        icon: "grid",
      }
    ]
  },
  {
    title: "Top Jobs",
    href: "/top-jobs",
    icon: "briefcase",
    children: [
      {
        title: "AI Jobs",
        href: "/top-jobs/ai",
      },
      {
        title: "Async Jobs",
        href: "/top-jobs/async",
      },
      {
        title: "Distributed Team",
        href: "/top-jobs/distributed-team",
      },
      {
        title: "Engineer Jobs",
        href: "/top-jobs/engineer",
      },
      {
        title: "Executive Jobs",
        href: "/top-jobs/executive",
      },
      {
        title: "Senior Jobs",
        href: "/top-jobs/senior",
      },
      {
        title: "Developer Jobs",
        href: "/top-jobs/developer",
      },
      {
        title: "Finance Jobs",
        href: "/top-jobs/finance",
      },
      {
        title: "Sys Admin Jobs",
        href: "/top-jobs/sys-admin",
      },
      {
        title: "JavaScript Jobs",
        href: "/top-jobs/javascript",
      },
      {
        title: "Backend Jobs",
        href: "/top-jobs/backend",
      }
    ],
  },
  {
    title: "Companies",
    href: "/companies",
    icon: "building",
    children: [
      {
        title: "Post a Job",
        href: "/companies/post-a-job"
      },
      {
        title: "Buy a Job Bundle",
        href: "/companies/buy-a-job-bundle"
      },
      {
        title: "Health Insurance for Teams",
        href: "/companies/health-insurance-for-teams"
      },
      {
        title: "Health Insurance for Nomads",
        href: "/companies/health-insurance-for-nomads"
      },
      
    ]
  },
  {
    title: "Feeds",
    href: "/feeds",
    children: [
      {
        title: "Remote Jobs API",
        href: "/feeds/remote-jobs-api"
      },
      {
        title: "RSS Feeds",
        href: "/feeds/rss-feeds"
      },
      {
        title: "JSON Feeds",
        href: "/feeds/json-feeds"
      },
      {
        title: "Hacker News for Remote Jobs",
        href: "/feeds/hacker-news-for-remote-jobs"
      },
      {
        title: "Safe for Work Mode",
        href: "/feeds/safe-for-work-mode"
      }
    ],
  },
  {
    title: "Other",
    icon: "ellipsis",
    href: "/other",
    children: [
      {
        title: "Uptime",
        href: "/other/uptime"
      },
      {
        title: "Pageviews",
        href: "/other/pageviews"
      },
      {
        title: "Remote work stats",
        href: "/other/remote-work-stats"
      },
      {
        title: "Top Remote Companies",
        href: "/other/top-remote-companies"
      },
      {
        title: "Highest Paying Remote Jobs",
        href: "/other/highest-paying-remote-jobs"
      },
      {
        title: "State of Remote Work",
        href: "/other/state-of-remote-work"
      },
      {
        title: "Become a Digital Nomad",
        href: "/other/become-a-digital-nomad"
      },
      {
        title: "Applicant AI",
        href: "/other/applicant-ai",
        icon: "✨"
      },
      {
        title: "Web3 Jobs",
        href: "/other/web3-jobs",
      },
      {
        title: "Photo AI",
        href: "/other/photo-ai",
      },
      {
        title: "Interior AI",
        href: "/other/interior-ai"
      },
      {
        title: "Get Portuguese Residency",
        href: "/other/get-portuguese-residency"
      }
    ]
  }
];
