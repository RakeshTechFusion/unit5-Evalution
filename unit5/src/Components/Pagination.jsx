import "../App.css";

export const Pagination = ({ total, selected, onPageChange }) => {
  let str = [];
  for (let i = 1; i <= total; i++) {
    str.push(i);
  }
  console.log(selected);
  return (
    <div className="pageContainer">
      <div>prev</div>
      {str.map((el, index) => {
        return (
          <>
            {console.log(selected === el)}
            {+selected == el ? (
              <div
                style={{
                  border: "1px solid #1488fb",
                  marginRight: "10px",
                  textalign: "center",
                  padding: "10px",
                }}
              >
                {el}
              </div>
            ) : (
              <div
                style={{
                  border: "1px solid #111518",
                  marginRight: "10px",
                  textalign: "center",
                  padding: "10px",
                }}
              >
                {el}
              </div>
            )}
          </>
        );
      })}
      <div
        onClick={() => {
          onPageChange(selected + 1);
        }}
      >
        next
      </div>
    </div>
  );
};