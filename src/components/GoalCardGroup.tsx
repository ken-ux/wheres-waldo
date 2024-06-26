import { useParams } from "react-router-dom";
import easy_goal_1 from "../assets/easy_goal_1.png";
import easy_goal_2 from "../assets/easy_goal_2.png";
import easy_goal_3 from "../assets/easy_goal_3.png";
import hard_goal_1 from "../assets/hard_goal_1.png";
import hard_goal_2 from "../assets/hard_goal_2.png";
import hard_goal_3 from "../assets/hard_goal_3.png";
import medium_goal_1 from "../assets/medium_goal_1.png";
import medium_goal_2 from "../assets/medium_goal_2.png";
import medium_goal_3 from "../assets/medium_goal_3.png";
import GoalCard from "./GoalCard";

export default function GoalCardGroup({
  goalsCompleted,
}: {
  goalsCompleted?: { 1: boolean; 2: boolean; 3: boolean };
}) {
  const { difficulty } = useParams();
  let img_src_1, img_src_2, img_src_3;
  let title_1, title_2, title_3;

  switch (difficulty) {
    case "easy":
      img_src_1 = easy_goal_1;
      img_src_2 = easy_goal_2;
      img_src_3 = easy_goal_3;
      title_1 = "Man with Snorkel";
      title_2 = "Waldo";
      title_3 = "Man with Brown Jacket";
      break;
    case "medium":
      img_src_1 = medium_goal_1;
      img_src_2 = medium_goal_2;
      img_src_3 = medium_goal_3;
      title_1 = "Waldo";
      title_2 = "Knocked-Out Skier";
      title_3 = "Resting Skier";
      break;
    case "hard":
      img_src_1 = hard_goal_1;
      img_src_2 = hard_goal_2;
      img_src_3 = hard_goal_3;
      title_1 = "Cowboy on Horse";
      title_2 = "Waldo";
      title_3 = "Man with Camera";
  }
  return (
    <>
      <GoalCard
        id={1}
        goalsCompleted={goalsCompleted}
        image={img_src_1}
        title={title_1}
      />
      <GoalCard
        id={2}
        goalsCompleted={goalsCompleted}
        image={img_src_2}
        title={title_2}
      />
      <GoalCard
        id={3}
        goalsCompleted={goalsCompleted}
        image={img_src_3}
        title={title_3}
      />
    </>
  );
}
