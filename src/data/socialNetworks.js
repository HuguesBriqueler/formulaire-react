import { v4 as uuidv4 } from "uuid";

export const selectReseauBox = [
  { value: "Facebook", label: "Facebook" },
  { value: "Twitter", label: "Twitter" },
  { value: "Instagram", label: "Instagram" },
  { value: "Linkedin", label: "Linkedin" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Snapchat", label: "Snapchat" },
  { value: "Messenger", label: "Messenger" },
  { value: "Pinterest", label: "Pinterest" },
  { value: "TikTok", label: "TikTok" },
  { value: "Discord", label: "Discord" },
];

export const initialChoixReseau = () => {
  return {
    reseau: selectReseauBox[0].value,
    url: "",
    tempId: uuidv4(),
  };
};
