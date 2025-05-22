import { Todo } from "@/types";

export default async function TodoList() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/todos`;
  console.log("url", url);
  const res = await fetch(url, {});
  console.log("res?", res);
  if (!res.ok) {
    throw new Error("Kon todos niet laden");
  }
  const todos: Todo[] = await res.json();
  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.title} {todo.isCompleted ? "✅" : "❌"}
        </p>
      ))}
    </div>
  );
}
