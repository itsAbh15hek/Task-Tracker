import Button from "./Button";

const Header = ({ onAdd, setText }) => {
  return (
    <>
      <header className="header">
        <h1>Task Tracker</h1>
        <Button
          onClick={onAdd}
          bgColor={`${setText ? "#C3B1E1" : "#AFE1AF"}`}
          text={`${setText ? "Conceal" : "Add a Task"}`}
        />
      </header>
    </>
  );
};

export default Header;
