import { ListItem } from "../../components/List";
import ProfilePageTextBoxSegment from "../../components/ProfilePageTextBoxSegment";

const masterEducationBulletPoints: ListItem[] = [
  { listItemLabel: "System integrations", listItemBody: "Implementing integrations with existing health platforms." },
  { listItemLabel: "Cross-platform notifications", listItemBody: "I implemented a cross-platform notification system using Firebase Cloud Messaging." },
  { listItemLabel: "Full-cycle feature development", listItemBody: "Implementing features in the app and on the website from scratch." },
  { listItemLabel: "GraphQL architecture", listItemBody: "Designed and implemented the GraphQL API layer, schemas, efficient server-side resolvers, and optimized client-side queries for performance." },
  { listItemLabel: "Ad hoc engineering tasks", listItemBody: "I was charged with tackling a multi-varied set of tasks. Examples include code optimizations, refactoring, code reviews, fixing of unexpected bugs, etc." },
];

const bachelorEducationBulletPoints: ListItem[] = [
  { listItemLabel: "Core competencies", listItemBody: "Object-oriented programming (Java), data structures, and database systems." },
  { listItemLabel: "Systems & security", listItemBody: "Gained hands-on experience in computer architecture, ethical hacking, and distributed applications." },
  { listItemLabel: "Mathematical foundations", listItemBody: "Discrete mathematics, statistics, and advanced engineering mathematics." },
  { listItemLabel: "Software engineering", listItemBody: "Applied Agile methodologies and collaborative version control through various group-based software projects." },
];

const bachelorExchangeEducationBulletPoints: ListItem[] = [
  { listItemLabel: "Academic focus", listItemBody: "Focused on the architecture and security of highperformance computer systems." },
  { listItemLabel: "Coursework", listItemBody: "Operating systems, multiprocessor architecture, computer networks, and numerical methods for machine learning." },
  { listItemLabel: "Cultural & language", listItemBody: "Adapted to a high-intensity international environment." },
]

const EducationTextBody = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfilePageTextBoxSegment
        title="MSc in Computer Science and Engineering"
        date="8/2023–9/2025"
        list={masterEducationBulletPoints}
      />
      <ProfilePageTextBoxSegment
        title="BSc in Software Technology"
        date="1/2019–1/2023"
        list={bachelorEducationBulletPoints}
      />
      <ProfilePageTextBoxSegment
        title="Exchange semester at EPFL"
        date="9/2021–1/2022"
        list={bachelorExchangeEducationBulletPoints}
      />
    </div>
  )
}

export default EducationTextBody;
