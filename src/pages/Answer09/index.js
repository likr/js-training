import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart09";
import answer from "./answer.md";

const convertData = (input) => {
  const ratio = 0.01;
  const ministryCount = {};
  const ministries = Array.from(
    new Set(input.map(({ ministry }) => ministry))
  ).map((ministry) => {
    const ministryProjects = input.filter((item) => item.ministry === ministry);
    const bureauCount = {};
    const bureaus = Array.from(
      new Set(ministryProjects.map(({ bureau }) => bureau))
    )
      .map((bureau) => {
        const bureauProjects = ministryProjects.filter(
          (item) => item.bureau === bureau
        );
        const departments = Array.from(
          new Set(bureauProjects.map(({ department }) => department))
        )
          .map((department) => {
            const departmentProjects = bureauProjects.filter(
              (item) => item.department === department
            );
            return {
              name: department,
              count: departmentProjects.length,
            };
          })
          .filter(({ count }) => count / input.length >= ratio);
        departments.sort((item1, item2) => item2.count - item1.count);
        departments.push({
          name: "その他",
          count:
            bureauProjects.length -
            departments.reduce((a, { count }) => a + count, 0),
        });
        bureauCount[bureau] = bureauProjects.length;
        return {
          name: bureau,
          children: departments,
        };
      })
      .filter(({ name }) => bureauCount[name] / input.length >= ratio);
    bureaus.sort(
      (item1, item2) => bureauCount[item2.name] - bureauCount[item1.name]
    );
    bureaus.push({
      name: "その他",
      count:
        ministryProjects.length -
        bureaus.reduce((a, { name }) => a + bureauCount[name], 0),
    });
    ministryCount[ministry] = ministryProjects.length;
    return {
      name: ministry,
      children: bureaus,
    };
  });
  ministries.sort(
    (item1, item2) => ministryCount[item2.name] - ministryCount[item1.name]
  );
  return {
    children: ministries,
  };
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      dataUrl="data/judgit-departments.json"
      lessonUrl="/lesson09"
      title="Lesson 09 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
