import { useContext } from "react";
import { useEffect } from "react";
import Course from "./components/Course";
import Context from "./context/Context";
import "./App.css";
import Loading from "./components/Loading";

function App() {
  const { fetchApi, data, loading } = useContext(Context);

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="container">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {data.length === 0 ? (
              <>
                <h2>Kursların hepsini sildin!</h2>
                <button
                  onClick={() => {
                    fetchApi();
                  }}
                >
                  Yenile
                </button>
              </>
            ) : (
              <>
                <div className="title">
                  <h2>KURSLAR</h2>
                </div>
                <div className="card-box">
                  {data.map((course, index) => {
                    return <Course {...course} key={index} />;
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
