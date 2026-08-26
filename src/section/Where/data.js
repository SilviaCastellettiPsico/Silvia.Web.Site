import where from "../../content/section/where/where.json";
import markdown from "../../content/section/where/where.md?raw";
import image1 from "../../assets/images/studio_1.jpg";
import image2 from "../../assets/images/studio_2.jpg";
import image3 from "../../assets/images/studio_3.jpg";

export const whereData = {
  ...where,
  image1: { ...where.image1, src: image1 },
  image2: { ...where.image2, src: image2 },
  image3: { ...where.image3, src: image3 },
  markdown,
};
