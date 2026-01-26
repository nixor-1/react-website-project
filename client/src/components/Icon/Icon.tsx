import { IconProps, IconMapping } from "./Icon.types";
import {
  LuLayoutDashboard, LuBookOpenText, LuPencil, LuPencilRuler,
  LuRss, LuSettings, LuTrash, LuSave,
  LuRotateCcw, LuWrench, LuSend, LuUser,
  LuBriefcaseBusiness, LuGraduationCap, LuFlame, LuEarth,
  LuMoon, LuSun,
} from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";

const IconMap: IconMapping = {
  'dashboard': LuLayoutDashboard,
  'settings': LuSettings,
  'rss': LuRss,
  'view': LuBookOpenText,
  'create': LuPencil,
  'edit': LuPencilRuler,
  'tool': LuWrench,
  'reset': LuRotateCcw,
  'save': LuSave,
  'send': LuSend,
  'delete': LuTrash,
  'user': LuUser,
  'business': LuBriefcaseBusiness,
  'education': LuGraduationCap,
  'flame': LuFlame,
  'earth': LuEarth,
  'moon': LuMoon,
  'sun': LuSun,
  'linkedin': FaLinkedin,
}

const Icon = ({ iconName, size }: IconProps) => {
  const IconComponent = IconMap[iconName]
  return <IconComponent className="text-color-primary" size={size} />
}

export default Icon;
