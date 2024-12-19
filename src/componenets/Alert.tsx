interface Props {
  children: string;
}

function Alert({ children }: Props) {
  return <div className="alert alert-primary">{children}</div>;
}

export default Alert;
