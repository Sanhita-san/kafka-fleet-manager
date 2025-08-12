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
  { icon: AiOutlineHome, link: "/home" },
  { icon: SiKubernetes, link: "/kubernetes" },
  { icon: SiApachekafka, link: "/clusters" },
  { icon: MdOutlineSettings, link: "/settings" },
  { icon: MdOutlineTroubleshoot, link: "/troubleshoot" },
  { icon: MdRocketLaunch, link: "/launch" },
  { icon: MdOutlineHub, link: "/hub" },
];

export const bottomNavLinks = [
  { icon: MdVpnKey, link: "/key" },
  { icon: MdCreditCard, link: "/action" },
  { icon: MdSupportAgent, link: "/contact" },
];
