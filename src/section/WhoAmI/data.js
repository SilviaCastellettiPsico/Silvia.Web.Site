import whoami from "../../content/section/whoami/whoami.json";
import markdown from "../../content/section/whoami/introduction.md?raw";
import image from "../../assets/images/whoami.jpg";

export const whoamiData = {
  ...whoami,
  image: { ...whoami.image, src: image },
  markdown,
};
