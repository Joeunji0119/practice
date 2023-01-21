import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../Context";

const Detail = () => {
  const params = useParams();
  const [user, setUser] = useState([]);
  const { data } = useGetData();

  useEffect(() => {
    const [filter] = data.filter(({ id }) => id === Number(params.id));
    setUser(filter);
  }, [params.id, data]);

  return (
    <section>
      <article>
        <img alt="avatar" src={user?.avatar} />
        <p>
          <strong>{user?.first_name}</strong>
        </p>
        <p>{user?.email}</p>
      </article>
    </section>
  );
};

export default Detail;
