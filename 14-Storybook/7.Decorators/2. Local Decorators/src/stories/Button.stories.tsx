import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
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