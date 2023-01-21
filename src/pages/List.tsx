import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetData } from "../Context";

const List = () => {
  const { datas, setDatas } = useGetData();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((result) => setDatas(result.data));
  }, [setDatas]);

  return (
    <section>
      <nav>
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
