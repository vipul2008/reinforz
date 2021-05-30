import { useContext } from "react";
import { PlayContext } from "../../../context/PlayContext";
import { ListTable } from "../../../shared";
import { divideTimeAllocated } from "../../../utils";
import "./PlayListTable.scss";

export function PlayListTable() {
  const { filteredQuizzes } = useContext(PlayContext);
  return <div className="PlayListTable">
    <ListTable className="PlayListTable--difficulty" generateTitle={(item) => `${item.subject} - ${item.topic}`} headers={["Beginner", "Intermediate", "Advanced"]} itemKey={"questions"} itemKeyKey={"difficulty"} items={filteredQuizzes} />
    <ListTable className="PlayListTable--type" generateTitle={(item) => `${item.subject} - ${item.topic}`} headers={["MCQ", "MS", "FIB", "Snippet"]} itemKey={"questions"} itemKeyKey={"type"} items={filteredQuizzes} />
    <ListTable className="PlayListTable--time_allocated" generateTitle={(item) => `${item.subject} - ${item.topic}`} headers={["15", "30", "45", "60", "90", "120"]} itemKey={"questions"} itemKeyKey={"time_allocated"} items={filteredQuizzes} itemMapKey={(item) => divideTimeAllocated(item.time_allocated)} />
  </div>
}