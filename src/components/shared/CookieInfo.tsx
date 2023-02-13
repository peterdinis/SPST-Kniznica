import CookieConsent from "react-cookie-consent";

const CookieInfo: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Sure man!!"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
    </CookieConsent>
  );
};

export default CookieInfo;
