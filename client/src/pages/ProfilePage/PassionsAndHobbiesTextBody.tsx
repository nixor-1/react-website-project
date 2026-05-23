import { ComponentOrientation } from "@react-project/shared/components";
import ProfilePageTextBoxSegment from "../../components/ProfilePageTextBoxSegment";
import SeparatorLine from "../../components/SeparatorLine";
import { SeparatorLineType } from "../../components/SeparatorLine/SeparatorLine.types";

const PassionsAndHobbiesTextBody = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-title-secondary">Bodybuilding</h2>
      <p>I regularly lift weights to keep myself in a healthy condition.</p>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-2"
      />

      <h2 className="text-title-secondary">Running</h2>
      <p>
        Running soothes my mind whenever life throws obstacles my way. I also
        commit myself to the activity to keep my body in a healthy condition.
      </p>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-2"
      />

      <h2 className="text-title-secondary">Notetaking</h2>
      <p>
        I have made it a hobby to take notes whenever I read and learn about
        important and interesting subjects. I considure it a leisurely activity
        and am passionate about designing my notes such that they capture the
        fundamentals of whatever I learn.
      </p>

      <SeparatorLine
        orientation={ComponentOrientation.HORIZONTAL}
        type={SeparatorLineType.Dotted}
        className="my-2"
      />

      <h2 className="text-title-secondary">Artificial intelligence</h2>
      <p>
        I am very passionate about artificial intelligence, especially
        reinforcement learning, and neuro-symbolic artificial intelligence. I
        like to learn about related subjects in my free time whenever time
        permits.
      </p>
    </div>
  );
};

export default PassionsAndHobbiesTextBody;
