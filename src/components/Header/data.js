import header from "../../content/components/header/header.json";
import logo from "../../assets/images/logo.png";

export const headerData = {
  ...header,
  image: { ...header.image, src: logo },
};
