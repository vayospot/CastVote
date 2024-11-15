import {
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "react-native-toast-message";

const toastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontFamily: "PTSansBold",
        fontWeight: "normal",
        fontSize: 13,
      }}
      text2Style={{
        fontFamily: "PTSansRegular",
        fontWeight: "normal",
        fontSize: 12,
      }}
    />
  ),
  success: (props) => (
    <SuccessToast
      {...props}
      text1Style={{
        fontFamily: "PTSansBold",
        fontWeight: "normal",
        fontSize: 13,
      }}
      text2Style={{
        fontFamily: "PTSansRegular",
        fontWeight: "normal",
        fontSize: 12,
      }}
    />
  ),
  info: (props) => (
    <InfoToast
      {...props}
      text1Style={{
        fontFamily: "PTSansBold",
        fontWeight: "normal",
        fontSize: 13,
      }}
      text2Style={{
        fontFamily: "PTSansRegular",
        fontWeight: "normal",
        fontSize: 12,
      }}
    />
  ),
};

export default toastConfig;
