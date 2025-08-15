// Nav
import { AiOutlineHome } from "react-icons/ai";
import { SiKubernetes } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineTroubleshoot } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { MdOutlineHub } from "react-icons/md";

// Bottom Nav
import { MdVpnKey } from "react-icons/md";
import { MdCreditCard } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

export const navLinks = [
  { name: "Home", icon: AiOutlineHome, link: "/home" },
  { name: "Kubernetes", icon: SiKubernetes, link: "/kubernetes" },
  { name: "Clusters", icon: SiApachekafka, link: "/clusters" },
  { name: "Setting", icon: MdOutlineSettings, link: "/settings" },
  { name: "Troubleshoot", icon: MdOutlineTroubleshoot, link: "/troubleshoot" },
  { name: "Launch", icon: MdRocketLaunch, link: "/launch" },
  { name: "Hub", icon: MdOutlineHub, link: "/hub" },
];

export const bottomNavLinks = [
  { name: "Key", icon: MdVpnKey, link: "/key" },
  { name: "Billing", icon: MdCreditCard, link: "/billing" },
  { name: "Contact", icon: MdSupportAgent, link: "/contact" },
];
