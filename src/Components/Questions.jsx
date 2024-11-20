import React, { useEffect, useState } from "react";
import { fetchQuestions } from "../services/api";
import debounce from "lodash.debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faEye, faMessage } from "@fortawesome/free-solid-svg-icons";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("activity");

  const filters = [
    { display: "Interesting", value: "activity" },
    { display: "Bountied", value: "votes" },
    { display: "Hot", value: "hot" },
    { display: "Week", value: "week" },
    { display: "Month", value: "month" },
  ];

  const debouncedFetchQuestions = debounce(async (filter) => {
    const data = await fetchQuestions(filter);
    setQuestions(data);
  }, 300);

  useEffect(() => {
    debouncedFetchQuestions(filter);
  }, [filter]);

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-lg font-bold mb-4">Top Questions</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Ask a Question
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-lg ${
              filter === f.value ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            {f.display}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div
            key={q.question_id}
            className="p-4 border rounded-lg shadow hover:shadow-md"
          >
            <h2 className="font-bold text-lg">{q.title}</h2>
            <div className="text-gray-500 text-sm">
              <span>{q.answer_count} answers</span> •{" "}
              <span>{q.view_count} views</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
