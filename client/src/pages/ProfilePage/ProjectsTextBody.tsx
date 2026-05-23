import { ComponentOrientation } from "@react-project/shared/components";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";

const ProjectsTextBody = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h2 className="text-title-secondary">Personal website</h2>
        <p>
          Developed a personal website using the following tech stack: React,
          TypeScript, Vite, Prisma, Redux, Tailwind. The code resides in a
          public repo on my GitHub page.
        </p>
      </div>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />

      <div className="flex flex-col">
        <h2 className="text-title-secondary">Master's thesis</h2>
        <p>
          Implemented the MADDPG reinforcement learning algorithm and logic
          tensor networks in Python. Several machine learning libraries were
          used: PyTorch, PettingZoo, Gymnasium, etc.
        </p>
      </div>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />

      <div className="flex flex-col">
        <h2 className="text-title-secondary">Multi-agent systems</h2>
        <p>
          Implemented collaborative, intelligent agents in Java at my
          university. My team won an award for a top-10 finish in the final
          competition.
        </p>
      </div>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-4"
      />

      <div className="flex flex-col">
        <h2 className="text-title-secondary">Android app</h2>
        <p>
          Created an Android app during my studies with Java and Kotlin.
          Component development and prototyping was performed in Figma.
        </p>
      </div>
    </div>
  );
};

export default ProjectsTextBody;
