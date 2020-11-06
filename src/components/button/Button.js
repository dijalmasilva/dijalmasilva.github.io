import "./Button.scss";

function Button({ children, type = "default", ...props }) {
  switch (type) {
    case "primary":
      return <ButtonPrimary {...props}>{children}</ButtonPrimary>;
    case "bounded":
      return <ButtonBounded {...props}>{children}</ButtonBounded>;
    default:
      return <ButtonDefault {...props}>{children}</ButtonDefault>;
  }
}

function ButtonDefault({ children, ...props }) {
  return <button className={"bt bt-default"}>{children}</button>;
}

function ButtonPrimary({ children, ...props }) {
  return <button className={"bt bt-primary"}>{children}</button>;
}

function ButtonBounded({ children, ...props }) {
  return <button className={"bt bt-bouded"}>{children}</button>;
}

export default Button;
