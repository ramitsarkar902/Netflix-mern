import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../data";

function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User ",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 120,
      editable: true,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "active" ? (
              <img
                className="status"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Check_icon.svg/120px-Check_icon.svg.png"
                alt="active"
              ></img>
            ) : (
              <img
                className="status"
                src="https://icon-library.com/images/inactive-icon/inactive-icon-8.jpg"
                alt="inactive"
              ></img>
            )}
          </>
        );
      },
    },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 160,
      editable: true,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <div className="userListAction">
              <Link to={"/user/" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
