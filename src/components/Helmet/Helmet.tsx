import { Helmet } from "react-helmet";

interface ITabTitle {
  title: string;
}

function TabTitle({ title }: ITabTitle) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default TabTitle;
