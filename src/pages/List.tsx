import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetData } from "../Context";

const List = () => {
  const { datas, setDatas } = useGetData();
  const [count, setCount] = useState(0);

  const toTest = () => {
    setCount((pre) => pre + 2);
    setCount((pre) => pre + 1);
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((result) => setDatas(result.data));
  }, [setDatas]);

  return (
    <section>
      <nav>
        <button onClick={toTest}>모달 버튼{count}</button>
        {datas?.map(({ id, first_name, email, avatar }) => (
          <Link key={id} to={`/detail/${id}`}>
            <p>
              <strong>{first_name}</strong>
            </p>
            <p>{email}</p>
            <img alt="avatar" src={avatar} />
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default List;
