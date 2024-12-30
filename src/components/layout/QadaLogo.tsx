import { Link } from "react-router-dom";

const QadaLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/images/svg/qatalogo.svg"
        alt="Logo"
        // className={clsx(logoSize(size as string).imgSize)}
      />
      
    </Link>
  );
};

export default QadaLogo;