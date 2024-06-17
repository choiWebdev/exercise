import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => console.error(`useFetch(${url}) error: `, err));
  }, [url]);

  const addTask = (task) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult((prevResult) => [...prevResult, data]);
      })
      .catch((err) => console.error(`useFetch(${url}) addTask error: `, err));
  };

  const deleteTask = (id) => {
    const deleteCheck = window.confirm("할 일을 삭제할까요?");
    deleteCheck && 
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setResult((prevResult) => prevResult.filter((task) => task.id !== id));
      })
      .catch((err) => console.error(`useFetch(${url}) deleteTask error: `, err));
  };

  const isDoneTask = (id, isDoneTask) => {
    fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(isDoneTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult((prevResult) =>
          prevResult.map((task) => (task.id === id ? data : task))
        );
      })
      .catch((err) =>
        console.error(`useFetch(${url}) isDoneTask(${id}) error: `, err)
      );
  }

  return [result, addTask, deleteTask, isDoneTask];
}