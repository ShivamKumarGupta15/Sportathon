// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const Admin = () => {
//   const [allData, setAllData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedSport, setSelectedSport] = useState("All");

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       const response = await fetch("http://localhost:8083/registrations/alldata");
//       if (!response.ok) {
//         throw new Error("Failed to fetch leaderboard data");
//       }
//       const data = await response.json();
//       setAllData(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching leaderboard data:", error);
//       setLoading(false);
//     }
//   };

//   const handleSportChange = (event) => {
//     setSelectedSport(event.target.value);
//   };

//   const filteredData = selectedSport === "All" ? allData : allData.filter((row) => row.sport === selectedSport);

//   return (
//     <>
//       <h3 className="titles">DashBoard</h3>
//       <RadioGroup
//         row
//         aria-label="sport"
//         name="sport"
//         value={selectedSport}
//         onChange={handleSportChange}
//       >
//         <FormControlLabel
//           value="All"
//           control={<Radio />}
//           label="All"
//         />
//         <FormControlLabel
//           value="Football"
//           control={<Radio />}
//           label="Football"
//         />
//         <FormControlLabel
//           value="Cricket"
//           control={<Radio />}
//           label="Cricket"
//         />
//         <FormControlLabel
//           value="chess"
//           control={<Radio />}
//           label="Chess"
//         />
//         <FormControlLabel
//           value="BasketBall"
//           control={<Radio />}
//           label="BasketBall"
//         />
//         <FormControlLabel
//           value="tennis"
//           control={<Radio />}
//           label="tennis"
//         />
//         <FormControlLabel
//           value="tabletennis"
//           control={<Radio />}
//           label="tabletennis"
//         />
//       </RadioGroup>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Id</StyledTableCell>
//               <StyledTableCell align="right">SapId</StyledTableCell>
//               <StyledTableCell align="right">Sport</StyledTableCell>
//               <StyledTableCell align="right">Name</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {loading ? (
//               <TableRow>
//                 <TableCell colSpan={4} align="center">
//                   Loading...
//                 </TableCell>
//               </TableRow>
//             ) : (
//               filteredData.map((row) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledTableCell component="th" scope="row">
//                     {row.id}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.sapid}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">{row.sport}</StyledTableCell>
//                   <StyledTableCell align="right">{row.name}</StyledTableCell>
//                 </StyledTableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// };

// export default Admin;



import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Admin = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState("All");

  useEffect(() => {
    // Fetch initial data when component mounts
    fetchData("http://localhost:8083/teams");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAllData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
    let apiUrl = "";
    switch (event.target.value) {
      case "Team Event":
        apiUrl = "http://localhost:8083/teams";
        break;
      case "Individual Sport":
        apiUrl = "http://localhost:8083/registrations/alldata";
        break;
      // Add cases for other sports if needed
      default:
        apiUrl = "http://localhost:8083/teams";
    }
    fetchData(apiUrl);
  };

  return (
    <>
      <h3 className="titles">DashBoard</h3>
      <RadioGroup
        row
        aria-label="sport"
        name="sport"
        value={selectedSport}
        onChange={handleSportChange}
      >
        <FormControlLabel
          value="Team Event"
          control={<Radio />}
          label="Team Event"
        />
        <FormControlLabel
          value="Individual Sport"
          control={<Radio />}
          label="Individual Sport"
        />
        {/* Add more radio buttons for other sports if needed */}
      </RadioGroup>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">SapId</StyledTableCell>
              <StyledTableCell align="right">Sport</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              allData.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.sapid}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.sport}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                </StyledTableRow>
              ))
            )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Admin;






