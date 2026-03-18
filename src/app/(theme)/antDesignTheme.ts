import { ThemeConfig } from "antd";

export const getAntdTheme = (): ThemeConfig => ({
  token: {
    fontFamily: `var(--font-hse-sans)`,
    fontSize: 16,
    borderRadius: 12,
    lineHeight: 1,
    colorPrimary: "#FFF",
    colorInfo: "#FFF",
    colorLink: "#FFF",
    colorInfoText: "#FFF",
    colorPrimaryText: "#FFF",
  },
  components: {
    Button: {
      paddingBlock: 12,
      paddingInline: 24,
      borderRadius: 1000,
    },
  },
});
