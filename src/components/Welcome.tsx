import { ReactElement } from "react";

type WelcomeProps = {
    userName: string,
    welcomeText: string
};

export default function Welcome(props: WelcomeProps): ReactElement {
  return (
    <>
      <div className="name">{props.userName}</div>
      <div className="welcomText">{props.welcomeText}</div>
    </>
  );
}
