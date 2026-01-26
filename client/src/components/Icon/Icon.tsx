import { IconProps, IconMapping } from "./Icon.types";
import {
  LuBookOpenText, LuPencil, LuPencilRuler,
  LuRss, LuTrash, LuSave, LuRotateCcw,
  LuWrench, LuSend, LuUser, LuBriefcaseBusiness,
  LuGraduationCap, LuFlame, LuEarth, LuMoon,
  LuSun, LuHouse, LuAtSign,
} from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const IconMap: IconMapping = {
  'home': LuHouse,
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
  'mail': LuAtSign,
  'linkedin': FaLinkedin,
  'github': FaGithub,
}

const Icon = ({ iconName, size }: IconProps) => {
  const IconComponent = IconMap[iconName]
  return <IconComponent className="text-color-primary" size={size} />
}

export default Icon;
