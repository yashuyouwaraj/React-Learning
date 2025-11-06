import Button from "../components/Button";

export default {
  //Nesting our Components
  title: "products/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

//Remaining Stories
Primary.storyName = "Blue Button";
Secondary.storyName = "Green Button";
Danger.storyName = "Red Button";
