import { render, screen } from "@testing-library/react";
import App from "./components/app.component";
import { Provider } from "react-redux";
import store from "./store";

test("input should render correctly", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const resultsArray = screen.getAllByText("Add Question...");
  expect(resultsArray[0]).toBeInTheDocument();
});
