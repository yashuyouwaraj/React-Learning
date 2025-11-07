import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = {
  args: {
    label: "Click Me",
    color: "#007bff",
    disabled: false,
  },
};

export const DisabledButton = {
  args: {
    label: "Disabled",
    color: "#888",
    disabled: true,
  },
};
export const RedButton = {
  args: {
    label: "Disabled",
    color: "#12ff2c",
    disabled: true,
  },
};
export const BlueButton = {
  args: {
    label: "Disabled",
    color: "#f2ae2a",
    disabled: true,
  },
};