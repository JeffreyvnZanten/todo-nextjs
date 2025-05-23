import { Todo } from "@/types";

export default function TodoList() {
  // let todos: Todo[] = [];

  // try {
  //   const base = process.env.API_URL ?? "http://api:3000";
  //   const url = `${base}/api/v1/todos`;

  //   console.log("fetching", url);

  //   const res = await fetch(url, { cache: "no-store" });

  //   if (!res.ok) {
  //     throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  //   }

  //   todos = await res.json();
  // } catch (err) {
  //   console.error("Kon todos niet laden", err);
  // }

  return (
    <div>
      {/* {todos.length === 0 ? (
        <p>(Geen taken gevonden)</p>
      ) : (
        todos.map((todo) => (
          <p key={todo.id}>
            {todo.title} {todo.isCompleted ? "✅" : "❌"}
          </p>
        ))
      )} */}
      test
    </div>
  );
}
