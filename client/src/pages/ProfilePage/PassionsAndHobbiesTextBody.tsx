import ProfilePageTextBoxSegment from "../../components/ProfilePageTextBoxSegment";

const PassionsAndHobbiesTextBody = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfilePageTextBoxSegment
        title="Artificial intelligence"
        desc="I am very passionate about AI, both because I find it extremely interesting to think of practical ways of implementing it, and because I am of the personal belief that AI has the potential to eclipse all other technologies in the long run — easily eclipsing that of, e.g., fire and the internet — although one might argue that they _could_ be more important as they are prerequisites for AI, but I digress."
      />
      <ProfilePageTextBoxSegment
        title="Exercise and bodybuilding"
        desc="In general, I like exercising and bodybuilding as I feel myself immediately getting happier, which is probably due to a sound dose of dopamine release, and because I want to be and stay healthy. Specifically with respect to running, I use it as a temporary escape from life, a moment of not having to think about work, money, duties, and responsibilites. I started out bodybuilding primarily because I wanted to look sexy, and thought of myself as somewhat lanky, and I still continue to do it for this reason, but also because it contributes to my health."
      />
    </div>
  )
}

export default PassionsAndHobbiesTextBody;
