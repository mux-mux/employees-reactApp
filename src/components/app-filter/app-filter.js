import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-outline-light" type="button">
        On promotion
      </button>
      <button className="btn btn-outline-light" type="button">
        Price &gt; 1000$
      </button>
    </div>
  );
};

export default AppFilter;
