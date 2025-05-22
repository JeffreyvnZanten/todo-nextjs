import "./page.css";
import TodoList from "@/components/TodoList";
import Loading from "./Loading";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    // <div className="container">
    //   <p>Test</p>
    // </div>
    <Suspense fallback={<Loading />}>
      <TodoList />
    </Suspense>
  );
}
