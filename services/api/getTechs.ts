import { Technologys } from "@/types/projects.interface";

const getTechs = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  const techs: Technologys[] = await res.json();
  return techs;
};

export default getTechs;
