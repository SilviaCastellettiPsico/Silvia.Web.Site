import approach from "../../content/section/approach/approach.json";
import markdown from "../../content/section/approach/approach.md?raw";
import image from "../../assets/images/studio_1.jpg";

export const approachData = {
  ...approach,
  image: { ...approach.image, src: image },
  markdown,
};
