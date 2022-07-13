// import React, { useState } from 'react';
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

// import DateTimePicker from '@mui/lab/DateTimePicker';
// //import DateTimePicker from 'react-datetime-picker';
// import "./AddSleep.css"

// export function AddSleep() {
// const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
//     const handleChange = (newValue) => {
//       setValue(newValue);
//     };

//   return (
   
//     <div style={{margin: "5% 40%"}}>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <Stack spacing={3}>
//           <DesktopDatePicker
//             label="Date desktop"
//             inputFormat="MM/dd/yyyy"
//             value={value}
//             onChange={handleChange}
//             renderInput={(params) => <TextField {...params} />}
//           />
         
         
//           <DateTimePicker
//             label="DateTime picker"
//             value={value}
//             onChange={handleChange}
//             renderInput={(params) => <TextField {...params} />}
//           />
//         </Stack>
//       </LocalizationProvider>
//     </div>
//   );
// }