import List from "../../components/List";

const WebsiteStatusTextBody = () => {
  return (
    <>
      <p>
        Som sagt er hjemmesiden langt fra færdig, og visse mangler, problemer
        findes derfor. Desuden er der features som jeg endnu ikke har nået at
        implementere. Nedenstående er en ikke-udtømmende liste over nævnte:
      </p>
      <List
        listItems={[
          {
            listItemLabel: "Styling og tilpasning af elementer",
            listItemBody:
              "Elementerne på siden tilpasser sig ikke perfekt ved visse skærmdimensioner. I forbindelse hermed er siden heller ikke tilpasset visning på smartphones eller tablets.",
          },
          {
            listItemLabel: "Bloggen",
            listItemBody:
              "Bloggen mangler visse features såsom filter og søgning.",
          },
          {
            listItemLabel: "Design og æstetik",
            listItemBody:
              "Designet er ikke helt finpudset, og kommer til at ændre sig gradvist i fremtiden. Et eksempel herpå er menuen over sprog som ikke på nuværnde ser ud helt som jeg ville ønske.",
          },
          {
            listItemLabel: "Automatisk sprogindstilling",
            listItemBody:
              "I fremtiden ønsker jeg at siden automatisk indstiller sproget til det din browser bruger.",
          },
        ]}
      />
    </>
  );
};

export default WebsiteStatusTextBody;
