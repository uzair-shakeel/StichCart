import React from "react";
import loaderImg from "../../assets/loading.gif";

const Button = ({
  className = "btn btn-primary",
  onClick,
  progress = false,
  label,
}) => {
  const renderProgress = () => {
    if (!progress) {
      return label;
    } else {
      return <img src={loaderImg} width={20} height={20} />;
    }
  };
  return (
    <div className={className} onClick={onClick}>
      {renderProgress()}
    </div>
  );
};

export default Button;
