import { http, HttpResponse } from "msw";
import { render, screen } from "@testing-library/react";
import Tasks from "./Tasks";

import { setupWorker } from "msw/browser";

describe("Tasks Component", () => {
  const worker = setupWorker(
    http.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      async () => {
        return HttpResponse.json({
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        });
      }
    )
  );

  beforeAll(() => {
    worker.start();
  });

  it("should fetch and show tasks on button click", () => {
    render(<Tasks />);

    const button = screen.getByText(/get tasks from api/i);
  });
});
