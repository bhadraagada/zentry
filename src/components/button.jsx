/* eslint-disable react/prop-types */
const Button = ({ id, title, leftIcon, containerClassName, rightIcon }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClassName}`}
    >
      {leftIcon}
      <span className="flex flex-row items-center justify-center relative  overflow-hidden font-general text-xs uppercase">
        <div className="">{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
