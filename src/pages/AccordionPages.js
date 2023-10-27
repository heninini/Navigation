import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "af",
      label: "yes you can",
      content:
        "You have requested a secure verification code to log into your  Account",
    },
    {
      id: "ds",
      label: "yes you can",
      content:
        "You have requested a secure verification code to log into your  Account",
    },
    {
      id: "afe",
      label: "yes you can",
      content:
        "You have requested a secure verification code to log into your  Account",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
