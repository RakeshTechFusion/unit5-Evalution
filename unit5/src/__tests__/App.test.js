import { render, screen } from "@testing-library/react";
import {Image} from "./Components/image";
test("Fake assertion", () => {
  expect(1).toBe(1);
});
describe('Image', () => {
  test('Image must have src = "/Image.svg" and alt = "Image"', () => {
    render(<App/>);
    const Image = screen.getByRole('img');
    expect(Image).toHaveAttribute('src', '/Image.svg');
    expect(Image).toHaveAttribute('alt', 'Image');
  });
});