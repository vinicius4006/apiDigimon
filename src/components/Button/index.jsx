import './styles.css'

export const Button = ({loadMoreDigi, notMoreDigi, text}) => {
    return (
        <button className={`btn btn-transition btn-styles${
          notMoreDigi
            ? " cursor-not-allowed hover:bg-gray-400 hover:text-red-400"
            : ""
        }`}
            onClick={loadMoreDigi}
            disabled={notMoreDigi}>
        {text}
        </button>
    );
}