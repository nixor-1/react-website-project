import { ListItem } from "../../components/List";
import ProfilePageTextBoxSegment from "../../components/ProfilePageTextBoxSegment";

const kintellaExperienceBulletPoints: ListItem[] = [
  { listItemLabel: "System integrations", listItemBody: "Implementing integrations with existing health platforms." },
  { listItemLabel: "Cross-platform notifications", listItemBody: "I implemented a cross-platform notification system using Firebase Cloud Messaging." },
  { listItemLabel: "Full-cycle feature development", listItemBody: "Implementing features in the app and on the website from scratch." },
  { listItemLabel: "GraphQL architecture", listItemBody: "Designed and implemented the GraphQL API layer, schemas, efficient server-side resolvers, and optimized client-side queries for performance." },
  { listItemLabel: "Ad hoc engineering tasks", listItemBody: "I was charged with tackling a multi-varied set of tasks. Examples include code optimizations, refactoring, code reviews, fixing of unexpected bugs, etc." },
];

const netcompanyBulletPoints: ListItem[] = [
  { listItemLabel: "Frontend development", listItemBody: "I built and maintained responsive user interfaces using React and TypeScript." },
  { listItemLabel: "Agile collaboration and workflow management", listItemBody: "I participated in daily stand- ups, reporting on feature status and collaborating with the team to unblock technical challenges.We utilized Azure DevOps to track sprints, track progress, and ensure timely deliverey of assigned tasks" },
  { listItemLabel: "Professional growth", listItemBody: "Adapted to industry-standard coding practices and workflows." },
];

const tutorBulletPoints: ListItem[] = [
  { listItemLabel: "Leadership and team coordination", listItemBody: "Together with a team of tutors, I planned and executed large-scale logistical events for the new students, ensuring adherence to various schedules and rulesets." },
  { listItemLabel: "Conflict management and resolution", listItemBody: "I was a point of contact for student grievances and helped mediate interpersonal conflicts." },
  { listItemLabel: "Communication skills", listItemBody: "Delivered presentations and workshops to large audiences, helping the new students with actionable advice." },
  { listItemLabel: "General interpersonal skills", listItemBody: "Throughout this entire process, I greatly boosted my general interpersonal skills." },
]

const WorkExperienceBody = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfilePageTextBoxSegment
        title="Kintella"
        date="7/2024–9/2025"
        desc="I worked in a startup environment and helped develop their app and website aimed at improving coordination and planning in care homes, primarily. I worked primarily with the React ecosystem and TypeScript. Some of the responsibilities I have had involve:"
        list={kintellaExperienceBulletPoints}
      />
      <ProfilePageTextBoxSegment
        title="Netcompany"
        date="2/2023–1/2024"
        desc="I worked at Netcompany as a front-end developer. Here I learned:"
        list={netcompanyBulletPoints}
      />
      <ProfilePageTextBoxSegment
        title="Tutor and mentor at DTU"
        date="2020"
        desc="As a tutor at DTU, I was selected to make a positive impact on the new students’ studies, facilitating their academic and social transition to the university environment at DTU. As a tutor I learned about:"
        list={tutorBulletPoints}
      />
    </div>
  )
}

export default WorkExperienceBody;
